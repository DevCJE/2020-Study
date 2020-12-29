<template>
  <div class="col-md-10 col-md-offset-1">
    <div class="panel panel-default">
      <table class="table table-hover">
        <thead>
        <tr>
          <th>#</th>
          <th>사용자 아이디</th>
          <th>이름</th>
          <th>이메일</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(listUser,index) in listUsers">
          <th scope="row">{{index + 1}}</th>
          <td>{{listUser.userId}}</td>
          <td>{{listUser.name}}</td>
          <td>{{listUser.email}}</td>
          <td><a href="#" class="btn btn-success" role="button">수정</a></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'List',
        data:function () {
            return{
                listUsers: [],
            }
        },
        created:function(){
          this.getData()
        },
        methods: {
            getData: function () {
// eslint-disable-next-line no-console
                this.$http.get('/user/list/getUserList.json').then((response) => {
                    this.listUsers = response.data
                }).catch((ex)=>{console.log("List API Error : " + ex)})
            }
        },
    }
</script>

<style>
</style>
