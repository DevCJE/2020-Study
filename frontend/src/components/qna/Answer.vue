<template>
  <div class="qna-comment-slipp">
    <p class="qna-comment-count"><strong>{{answer.length}}</strong>개의 의견</p>
    <div class="qna-comment-slipp-articles">
<!--      <article class="article" id="answer-1406">-->
<!--        <div class="article-header">-->
<!--          <div class="article-header-thumb">-->
<!--            <img src="https://graph.facebook.com/v2.3/1324855987/picture" class="article-author-thumb" alt="">-->
<!--          </div>-->
<!--          <div class="article-header-text">-->
<!--            <a class="article-author-name">자바지기</a>-->
<!--            <a class="article-header-time" title="퍼머링크">-->
<!--              2016-01-12 14:06-->
<!--            </a>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="article-doc comment-doc">-->
<!--          <p>이 글만으로는 원인 파악하기 힘들겠다. 소스 코드와 설정을 단순화해서 공유해 주면 같이 디버깅해줄 수도 있겠다.</p>-->
<!--        </div>-->
<!--        <div class="article-util">-->
<!--          <ul class="article-util-list">-->
<!--            <li>-->
<!--              <a class="link-modify-article" href="/questions/413/answers/1405/form">수정</a>-->
<!--            </li>-->
<!--            <li>-->
<!--              <form class="form-delete" action="/questions/413/answers/1405" method="POST">-->
<!--                <input type="hidden" name="_method" value="DELETE">-->
<!--                <button type="submit" class="delete-answer-button">삭제</button>-->
<!--              </form>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </article>-->
      <form class="submit-write">
        <div class="form-group" style="padding:14px;">
          <textarea class="form-control" placeholder="Update your status"></textarea>
        </div>
        <button class="btn btn-success pull-right" type="button">답변하기</button>
        <div class="clearfix" />
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "answer",
        props: ['answer']

    }
</script>

<style scoped>

</style>
