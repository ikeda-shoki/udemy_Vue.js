import Vue from 'vue';
import App from './App.vue';
import Header from './components/Header.vue'
// importすることでcomponentのオブジェクトに変換
// componentのオブジェクトっていうのはグローバル＝ Vue.component('componentの名前', {中身})
// ローカルの場合、下記のnew Vueの中にcomponents: {"外で定義したコンポーネントの名前", 現在のファイルで使用する名前}で書き込み、読み込んだ場合ローカルコンポーネント
// 上記でコンポーネントを読み込むことで全てのコンポーネントで使用できるグローバルコンポーネントになる(上記で言うとHeaderがそう！)。

Vue.config.productionTip = false;

Vue.component('Header', Header)

// カスタムディレクティブの作り方 Vue.directiveを宣言し、引数を2つとる。1つ目は名前、そして2つ目は5つつのオブジェクトをとる
// このオブジェクトはライフサイクルメソッドのようなものだと考えておけばいい、全てを書く必要はない！
// 5つのオブジェクトは引数にel,binding, vnodeを使用でき、updateとcomponentUpdateのみoldVnodeという引数を使用できる
// bindとupdateは同じ内容を書くことが多い！そのため省略記法がある 下記はその省略記法
Vue.directive("border", function(el, binding){
  // オブジェクトのデータをvalueで受け取れるようにしている
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;
  // 引数を使用する場合はargで使う！引数は1つしかしてできない
  el.style.borderStyle = binding.arg;
  if (binding.modifiers.round){
    el.style.borderRadius = "0.5rem"
  }
  if (binding.modifiers.shadow){
    el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.8)";
  }
});

// el 紐づいたHTML要素を取得する
// bind(el, binding, vnode) {
//   // ディレクティブが初めて対象の要素に紐付いた時 1度だけ
// },
// inserted(el, binding, vnode) {
//   // 親Nodeに挿入された時 DOMに挿入された時 $mountedのように実際に画面に描写された時！読み込まれる度に
// },
// update(el, binding, vnode, oldVnode) {
//   // コンポーネントの情報がどこかが少しでも変更された時 子コンポーネントが更新される前
// },
// componentUpdated(el, binding, vnode, oldVnode) {
//   // コンポーネントの情報がどこかが少しでも変更された時 子コンポーネントが更新された後
// },
// unbind(el, binding, vnode) {
//   // destroyのようなもの
// },


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