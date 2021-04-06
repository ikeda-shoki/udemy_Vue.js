import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  // render: function(h) {
  //   return h(App);
  // } 上の1行と同一の内容。ES6の書き方の違い
  // h = createElementのこと。これはDOM要素を作っているのではなくJaveScriptのオブジェクトを作成している。(JaveScriptとは違う)
  // 仮想DOMを作成している、hで作成したこの仮想DOM(オブジェクト)をVue.jsで書き換えてDOMとして描写する
  // 上記のAppではcomponentを読み込んでいる。hの中身が簡単にいうと
  // Vue.component('コンポーネントの名前',{コンポーネントの中身})を置き換えており、AppでcomponentsのAppの内容を読み込んでいる。

}).$mount('#app')