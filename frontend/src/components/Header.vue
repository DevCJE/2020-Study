<template>
  <div class="navbar navbar-default" id="subnav">
    <div class="col-md-12">
      <div class="navbar-header">
        <router-link to="/" style="margin-left:15px;" class="navbar-btn btn btn-default btn-plus dropdown-toggle"
                     data-toggle="dropdown"><i class="glyphicon glyphicon-home" style="color:#dd1111;"></i> Home <small><i
          class="glyphicon glyphicon-chevron-down"></i></small></router-link>
        <ul class="nav dropdown-menu">
          <li><router-link to="user/profile"><i class="glyphicon glyphicon-user" style="color:#1111dd;"></i>
            Profile</router-link>
          </li>
          <li class="nav-divider"></li>
          <li><router-link to="/"><i class="glyphicon glyphicon-cog" style="color:#dd1111;"></i> Settings</router-link></li>
        </ul>

        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse2">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbar-collapse2">
        <ul class="nav navbar-nav navbar-right" v-if="checkLogin">
          <li><router-link to="/" class="active">Posts</router-link></li>
          <li><a @click="logout">로그아웃</a></li>
          <li><router-link to="/user/edit" role="button">개인정보수정</router-link></li>
        </ul>
        <ul class="nav navbar-nav navbar-right" v-else>
          <li class="active"><router-link to="/">Posts</router-link></li>
          <li><router-link to="/user/login" role="button">로그인</router-link></li>
          <li><router-link to="/user/form" role="button">회원가입</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header",
        props:['checkLogin'],
        methods: {
            logout: function (e) {
                e.preventDefault()
                this.$http.post('/user/logout').then(response => {
                    this.$store.commit('logout')
                    this.$router.push('/')
                }).catch(err => {
                    console.log("Logout API Error : " + err)
                })
            }
        }
    }

</script>

<style scoped>

</style>
