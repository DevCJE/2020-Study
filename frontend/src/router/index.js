import Vue from 'vue'
import Router from 'vue-router'
import MainIndex from '@/components/MainIndex'
import List from '@/components/user/List'
import Form from '@/components/user/Form'
import update from '@/components/user/Update'
import profile from '@/components/user/Profile'
import login from '@/components/user/Login'
import qnaForm from '@/components/qna/Form'
import show from '@/components/qna/Show'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: MainIndex},
    {path: '/user/list', component: List},
    {path: '/user/profile', component: profile},
    {path: '/user/edit', component: update},
    {path: '/user/form', component: Form},
    {path: '/user/login', component: login},
    {path: '/qna/form', component: qnaForm},
    {path: '/qna/show/:id', component: show, props: true}
    // {path: '/user/:id/',
    //   component: profile,
    //   props: true,
    //   children: [
    //     {path: 'edit', component: update, props: true} //  props:true를 주면 이후 컴포넌트단에서 ${route.params.패러미터}와 같이 강한 결합이 아니라 자유롭게 쓸수 있다.
    //   ]
    // },
  ]
})
