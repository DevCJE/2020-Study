<template>
  <div class="col-md-12 col-sm-12 col-lg-12">
    <div class="panel panel-default">
      <header class="qna-header">
        <h2 class="qna-title"> {{ this.qna.title }}</h2>
      </header>
      <div class="content-main">
        <article class="article">
          <div class="article-header">
            <div class="article-header-thumb">
              <img src="https://graph.facebook.com/v2.3/100000059371774/picture" class="article-author-thumb" alt="">
            </div>
            <div class="article-header-text">
              <p class="article-author-name"> {{writerName}} </p>
              <p class="article-header-time" title="퍼머링크">
                {{ this.qna.formattedCreateDate }}
                <i class="icon-link"></i>
              </p>
            </div>
          </div>
          <div class="article-doc">
            {{ this.qna.contents }}
          </div>
          <div class="article-util">
            <ul class="article-util-list">
              <li>
                <router-link class="link-modify-article" :to="'/qna/edit/'+this.qna.idx" >수정</router-link>
              </li>
              <li>
                <form class="form-delete" method="POST">
                  <input type="hidden" name="_method" value="DELETE">
                  <button class="link-delete-article" type="submit" @click="this.delete">삭제</button>
                </form>
              </li>
              <li>
                <router-link class="link-modify-article" to="/">목록</router-link>
              </li>
            </ul>
          </div>
        </article>
        <div class="qna-comment">
          <Answer :answer="this.qna.answer"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

    import Answer from './Answer.vue'

    export default {
        name: "Show",
        components : {
            Answer
        },
        props : ['id'],
        data : function(){
            return{
                qna : [],
                writerName : ''
            }
        },
        methods : {
            load : function () {
                this.$http.post('/qna/show/'+this.id).then((res)=>{
                    this.qna = res.data
                    this.writerName = res.data.writer.name
                }).catch((err) => {
                    console.log("Qna Show API " + err)
                })
            },
            delete : function (e) {
                e.preventDefault()
                this.$http.post('/qna/delete/'+this.qna.idx).then((res)=>{
                    this.$router.push('/')
                }).catch((err)=>{
                    console.log("Qna Delete API " + err)
                })
            }
        },
        mounted : function () {
            this.load()
        }
    }
</script>

<style scoped>

</style>
