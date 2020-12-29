import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    session: false,
    user: []
  },
  getters: {
    getSession: function(state) {
      return state.session
    },
    getUser: state => { // 화살표 함수로 위와 아래의 소스코드는 같다고 보면 된다. 더 줄이기 원하면 중괄호와 return을 삭제해도 된다.
      return state.user
    }
  },
  mutations: {
    login: function (state) {
      state.session = true
    },
    logout: state => {
      state.session = false
      state.user=[]
    }
  },
  actions: {
    checkLogin: function (context) {
      axios.post('/user/checkLogin').then((response) => {
        context.commit("login") // mutations의 함수를 수행하기 위해서는 commit & action은 dispatch를 사용하면 된다.
        context.state.user = response.data // actions에서는 context 패러미터를 통해 vuex에 접근할 수 있다.
      }).catch((ex) => {
        console.log("CheckLogin API " + ex)
      })
    }
  }
})
