<template>
  <div class="col-md-6 col-md-offset-3">
    <div class="panel panel-default content-main">
      <div class="alert alert-danger" role="alert" v-if="loginFailed">아이디 또는 비밀번호가 틀립니다. 다시 로그인 해주세요.</div>
      <form name="question" method="post" action="/user/login">
        <div class="form-group">
          <label for="userId">사용자 아이디</label>
          <input class="form-control" id="userId" name="userId" v-model="userId" placeholder="User ID">
        </div>
        <div class="form-group">
          <label for="password">비밀번호</label>
          <input type="password" class="form-control" id="password" name="password"  v-model="password" placeholder="Password">
        </div>
        <button type="submit" v-on:click="validateLogin" class="btn btn-success clearfix pull-right">로그인</button>
        <div class="clearfix" />
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Login",
        data: function(){
          return{
              loginFailed:false
          }
        },
        methods: {
            validateLogin:function (e) {
                e.preventDefault()
                this.$http.post('/user/login',{userId: this.userId, password: this.password}).then(response => {
                    this.$store.commit('login')
                    this.$store.state.user = response.data
                    this.$router.push('/')
                }).catch((ex)=>{
                    console.log("Login API Error : " + ex)
                    this.loginFailed=true
                })
            }
        }
    }
</script>

<style scoped>

</style>
