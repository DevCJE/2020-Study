<template>
  <div class="col-md-12 col-sm-12 col-lg-10 col-lg-offset-1">
    <div class="panel panel-default content-main">
      <form name="question" method="post" action="">
        <div class="form-group">
          <label for="writer">글쓴이</label>
          <input class="form-control" id="writer" name="writer" :value="user.name" readonly/>
        </div>
        <div class="form-group">
          <label for="title">제목</label>
          <input type="text" class="form-control" id="title" name="title" placeholder="제목" v-model="title"/>
        </div>
        <div class="form-group">
          <label for="contents">내용</label>
          <textarea name="contents" id="contents" rows="5" class="form-control" v-model="contents"></textarea>
        </div>
        <button type="submit" class="btn btn-success clearfix pull-right" @click="question">질문하기</button>
        <div class="clearfix"/>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Form",
        props: ["user"],
        methods: {
            question: function (e) {
                e.preventDefault()
                this.$http.post("/qna/form", {title: this.title, contents: this.contents}).then((res) => {
                    this.$router.push({ path: '/qna/show/'+res.data })
                }).catch((err) => {
                    console.log("Qna Form API " + err)
                })
            }
        }
    }
</script>

<style scoped>

</style>
