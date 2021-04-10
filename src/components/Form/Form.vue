<template>
  <div class="form">
    <h2>イベントのフォーム</h2>
    <label for="title" class="title">タイトル</label>
    <!-- lazy修飾詞をつけることで選択が外れた時に下記の<p>が変化するようになる
      正確には文字が入力された時に発火するjsのinputというイベントからフォーカス(選択が外れた時)に発火するchangeというイベントに
      .lazyをつけることで変化する！ -->
      <!-- どういった時に使用するのか？→メールアドレスのバリデーションを使用する際に入力している時はエラーが出ず、決定した時にエラーが発生するようにしたい時など -->
    <input type="text" id="title" v-model.lazy="eventData.title">
    <p>{{ eventData.title }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return{
      eventData: {
        title: "タイトル",
      }
    }
  }
}
</script>

<style scoped>
  .form {
    margin-top: 50px;
  }
  h2 {
    margin-bottom: 20px;
  }
  label {
    margin-right: 20px;
  }
</style>