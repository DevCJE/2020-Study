<template>
  <div class="col-md-6 col-md-offset-3">
    <div class="panel panel-default content-main">
      <form name="question" method="post">
        <div class="form-group">
          <label for="userId">사용자 아이디</label>
          <input class="form-control" id="userId" name="userId" v-model="userId" placeholder="User ID">
        </div>
        <div class="form-group">
          <label for="password">비밀번호</label>
          <input type="password" class="form-control" id="password" name="password" v-model="password" placeholder="Password">
        </div>
        <div class="form-group">
          <label for="name">이름</label>
          <input class="form-control" id="name" name="name" v-model="name" placeholder="Name">
        </div>
        <div class="form-group">
          <label for="email">이메일</label>
          <input type="email" class="form-control" id="email" name="email" v-model="email" placeholder="Email">
        </div>
        <button type="submit" @click="userCreate"  class="btn btn-success clearfix pull-right">회원가입</button>
        <div class="clearfix"/>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Form",
        methods: {
            userCreate:function (e) {
                e.preventDefault()
                this.$http.post('/user/create',{userId: this.userId, password: this.password, name: this.name, email: this.email}).then((res) => {
                    this.$router.push({ path: '/' })
                }).catch((ex)=>{
                    console.log("List API Error : " + ex)
                    this.loginFailed=true
                })
            }
        }
    }
</script>
<style>
</style>
