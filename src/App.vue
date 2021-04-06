// Vueファイルはビルド時にcomponentのオブジェクトとしてjsに読み込まれる
<template>
  <div>
    <Header></Header>
  </div>
</template>

<script>
import Header from "./components/Header.vue"

export default {
  data(){
    return {
    };
  },
  components: {
    Header,
  },
  methods: {
  }
};
</script>

<style scoped>
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
    font-size: 100%;
    vertical-align: baseline;
  }

  header, footer, nav, section, article, aside, figure, figcaption {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
    list-style-type: none;
  }

  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
</style>