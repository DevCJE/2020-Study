<template>
  <div>
    <header>
      <Nav v-bind:check-login="this.$store.state.session"/>
      <Header v-bind:check-login="this.$store.state.session"/>
    </header>
    <section>
      <div id="main" class="container">
        <router-view v-bind:check-login="this.$store.state.session" v-bind:user="this.$store.state.user"/>
      </div>
    </section>
  </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Nav from './components/Nav.vue'

    export default {
        name: 'App',
        components: {
            Header,
            Nav
        },
        methods:{
            checkUnload: function () {
                let htmlLength = document.getElementById("main").innerHTML.length
                if(htmlLength == 7){
                    alert("잘못된 접근 방식입니다. \n메인 주소로 이동합니다.")
                    this.$router.push({ path: '/' })
                    return false
                }
            }
        },
        mounted: function () {
            this.checkUnload()
        }
    }
</script>

<style>
</style>
