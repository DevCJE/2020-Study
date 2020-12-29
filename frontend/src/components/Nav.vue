<template>
  <nav class="navbar navbar-fixed-top header">
    <div class="col-md-12">
      <div class="navbar-header">

        <router-link to="/" class="navbar-brand">SLiPP</router-link>
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse1">
          <i class="glyphicon glyphicon-search"></i>
        </button>

      </div>
      <div class="collapse navbar-collapse" id="navbar-collapse1">
        <form class="navbar-form pull-left">
          <div class="input-group" style="max-width:470px;">
            <input type="text" class="form-control" placeholder="Search" name="srch-term" id="srch-term">
            <div class="input-group-btn">
              <button class="btn btn-default btn-primary" type="submit"><i
                class="glyphicon glyphicon-search"></i></button>
            </div>
          </div>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <router-link to="/" class="dropdown-toggle" data-toggle="dropdown"><i class="glyphicon glyphicon-bell"></i></router-link>
            <ul class="dropdown-menu">
              <li><router-link to="/">SLiPP</router-link></li>
              <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
            </ul>
          </li>
          <li><router-link to="/user/list"><i class="glyphicon glyphicon-user"></i></router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "Nav",
        props:['checkLogin']
    }
</script>

<style scoped>

</style>
