// Vueファイルはビルド時にcomponentのオブジェクトとしてjsに読み込まれる
<template>
  <div>
    <Header></Header>
    <div class="container">
      <Tab></Tab>
      <Form></Form>
      <Home></Home>
    </div>
  </div>
</template>

<script>
import Tab from './components/Tab.vue'
import Form from './components/Form/Form.vue'
import Home from './components/Home.vue'

export default {
  data(){
    return {
    };
  },
  components: {
    Tab,
    Form,
    Home,
  },
};
</script>

<style>
/* transitionタグを定義した場合6つのname属性に関するものをstyleで定義する必要がある */
/* css animationを使用する場合は全ての状態を記載する必要はない！
なぜなら、@keyframsで始まりを終わりの状態を記載済みのため */
  .fade-move {
    /* vue.jsが勝手に動かしてくれている為、簡単に変更ができる */
    /* transition: transform;はテンプレートで決まっている */
    /* 消える動作を滑らかにする為には現在消えているDOMの上を通る必要がある為、DOMを浮かす必要がある。 */
    /* それを実現するには消える要素を消えている状態のところにposition: absolute;を記載するとDOMが浮く */
    transition: transform 1s;
  }
  .fade-enter {
    /* 現れる時の最初の状態 */
    opacity: 0;
  }
  .fade-enter-active {
    /* 現れる時のトランジションの状態 */
    transition: opacity .8s;
  }
  /* ここから下 */
  .fade-enter-to {
    /* 現れる時の最後の状態 */
    opacity: 1;
  }
  .fade-leave {
    /* 消える時の最初の状態 */
    opacity: 1;
  }
  /* ここから上はあってもなくても大丈夫 */
  .fade-leave-active {
    /* 消える時のトランジションの状態 */
    transition: opacity .8s;
    position: absolute;
  }
  .fade-leave-to {
    /* 消える時の最後の状態 */
    opacity: 0;
  }


  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-family: 'RocknRoll One', sans-serif;
  }

  html, body, h1, h2, h3, h4, h5, h6, ul, ol, dl, li, dt, dd, p, div, span, img, a, table, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    font-weight: normal;
    font-size: 16px;
    vertical-align: baseline;
  }

  header, footer, nav, section, article, aside, figure, figcaption {
    display: block;
  }

  body {
    line-height: 1;
    background-color: #f5ece4;
  }

  ol, ul {
    list-style: none;
    list-style-type: none;
  }

  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  .container {
    width: 90%;
    max-width: 1080px;
    margin: 0 auto;
    position: relative;
  }
</style>