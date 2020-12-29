<template>
  <div class="col-md-6 col-md-offset-3">
    <div class="panel panel-default content-main">
      <form name="question" method="post">
        <div class="form-group">
          <label for="userId">아이디</label>
          <input class="form-control" :value="user.userId" readonly/>
        </div>
        <div class="form-group">
          <label for="password">비밀번호</label>
          <input type="password" class="form-control" id="password" name="password" v-model="updatePassword" required>
        </div>
        <div class="form-group">
          <label for="name">이름</label>
          <input class="form-control" id="name" name="name" v-model="updateName">
        </div>
        <div class="form-group">
          <label for="email">이메일</label>
          <input type="email" class="form-control" id="email" name="email" v-model="updateEmail">
        </div>
        <button type="submit" class="btn btn-success clearfix pull-right" @click="update">정보 수정</button>
        <div class="clearfix"/>
      </form>
    </div>
  </div>
</template>


<script>
    export default {
        name: 'Update',
        props: ['checkLogin', 'user'], // props를 통해 상위 컴포넌트에서 설정되고 변경되어지는 값을 받아올 수 있다.
        methods: {
            update: function (e) {
                const path = '/user/edit/' + this.user.id
                e.preventDefault()
                this.$http.get(path, {
                    params: {password: this.updatePassword, name: this.updateName, email: this.updateEmail}
                }).then(response => {
                    this.$router.push('/user/list')
                }).catch(err => {
                    console.log("Update API Error : " + err)
                })
            }
        }
    }
</script>

<style scoped>

</style>
