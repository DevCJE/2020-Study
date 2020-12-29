Spring Boot JPA
                       
  로그인 Refresh 날라가는 부분
  Vuex에서 sotre.js에서 action을 이용하여
  axios를 통한 백엔드 비동기 통신으로 백엔드에 있는 세션 여부를 가지고
  Refresh가 되어 스토리지가 초기화 되면 그때마다 함수가 실행되어
  바로바로 정보를 채워넣을 수 있게 하였다.
  
  아무래도 Vue를 이용하는 부분이다 보니까 인터셉터 부분 보다는
  위와 같은 방식이 더 간결하고 추후 백엔드단을 분리하고 Vue만 사용하게 되더라도
  해당 방법을 해결하는 부분에 있어서 더 수월할거라 생각한다.
  
  store.js에 다음과 같은 action을 추가한후 main.js에 dispatch 하였다.
  ```
  actions : {
    checkLogin(context){
      axios.post('/user/checkLogin').then((response) => {
        context.commit("login")
        context.state.user = response.data
      }).catch((ex)=>{
        console.log("CheckLogin API " + ex)
      })
    }
  }
  ```

  main.js에 경우 vue 인스턴스를 실행하는 부분에 beforeCreate 라이프 사이클에
  해당 action을 dispatch 해주었다.
  ```markdown
new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    this.$store.dispatch("checkLogin")
  },
}).$mount('#main')
```

   마지막으로 스프링부트에서 로그인단 확인은 아래와 같은 코드로 작성하였다.
   ```markdown

    /** 회원 정보 수정 View (edit) & 로그인 세션 확인 (checkLogin) */
    @PostMapping({"/user/edit", "/user/checkLogin"})
    public @ResponseBody User edit(HttpSession session, HttpServletResponse response){
        User user = (User) session.getAttribute("session");
        if(user == null){
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }
        return user;
    }
```
@SessionAttributes를 사용하고 있는데, 해당 부분에 User 객체가 바인딩 되지 않으면
에러가 발생한다. 다만 SessionAttributes를 간단하게 살펴보면
해당 어노테이션을 통해서 User객체가 세션에 등록되는 과정에서 HttpSession에도 같은 값(이름)
으로 저장되기 때문에 해당 부분을 이용하기 위해 패러미터에서 가져오고
해당하는 이름값에 attirubtes가 없다면, ajax통신 status에 400 에러를 보내게 설정하였다.