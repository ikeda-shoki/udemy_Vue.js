import Vue from 'vue';
import App from './App.vue';
import Header from './components/Header.vue'
// importすることでcomponentのオブジェクトに変換
// componentのオブジェクトっていうのはグローバル＝ Vue.component('componentの名前', {中身})
// ローカルの場合、下記のnew Vueの中にcomponents: {"外で定義したコンポーネントの名前", 現在のファイルで使用する名前}で書き込み、読み込んだ場合ローカルコンポーネント
// 上記でコンポーネントを読み込むことで全てのコンポーネントで使用できるグローバルコンポーネントになる(上記で言うとHeaderがそう！)。

Vue.config.productionTip = false;

Vue.component('Header', Header)

new Vue({
  render: h => h(App),
  // render: function(h) {
  //   return h(App);
  // } 上の1行と同一の内容。ES6の書き方の違い、又renderはオブジェクトを引数に持てる
  // h = createElementのこと。これはDOM要素を作っているのではなくJaveScriptのオブジェクトを作成している。(JaveScriptとは違う)
  // 仮想DOMを作成している、hで作成したこの仮想DOM(オブジェクト)をVue.jsで書き換えてDOMとして描写する
  // 上記のAppではcomponentを読み込んでいる。hの中身が簡単にいうと
  // Vue.component('コンポーネントの名前',{コンポーネントの中身})を置き換えており、AppでcomponentsのAppの内容を読み込んでいる。

}).$mount('#app')