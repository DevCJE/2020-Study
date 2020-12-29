import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'

Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){ // beforeCrate()를 통해서 Vue인스턴스가 생성될 때 마다 Vuex-storage에 있는 checkLogin 액션을 dispatch 한다.
    this.$store.dispatch("checkLogin")
  },
}).$mount('#main')


// // Bootstrap 사용을 위한 Import
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// // jQuery 사용을 위한 Import
// import vueJquery from 'vue-jquery'
//
//
// Vue.config.productionTip = false
// // Bootstrap 사용을 위해 Vue에 적용
// Vue.use(BootstrapVue);
// // jQuery 사용을 위해 Vue에 적용
// Vue.use(vueJquery);



// Vue.use(Vuex)
//
// //VUEX 스토어 생성
// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })
