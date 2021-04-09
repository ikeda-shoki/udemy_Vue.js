// Vueファイルはビルド時にcomponentのオブジェクトとしてjsに読み込まれる
<template>
  <div>
    <Header></Header>
    <div class="container">
      <Tab></Tab>
    </div>
  </div>
</template>

<script>
import Tab from './components/Tab.vue'

export default {
  data(){
    return {
    };
  },
  components: {
    Tab,
  },
};
</script>

<style>
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