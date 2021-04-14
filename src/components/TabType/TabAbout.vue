<template>
  <div class="about">
    <TabHeader tab-header="About"></TabHeader>
    <input type="text">
  </div>
</template>

<script>
import TabHeader from './TabHeader'

export default {
  props: {
  },
  components: {
    TabHeader,
  },
  // keep-activeタグを使用した動的コンポーネント側で定義できるようになる、deactivated(){},activated(){}について
  // 下記の2つはライフサイクルメソッドでkeep-activeを使用することで使えるようになる
  // そうすることで、コンポーネントが作り替えられることはないが、コンポーネントが描画された際に下記のライフサイクルメソッドの内容が処理される
  deactivated() {
    // コンポーネントが消える時
    console.log("About");
  },
  activated() {
    // コンポーネントが描画される時
    console.log("create");
  }
}
</script>

<style>
</style>