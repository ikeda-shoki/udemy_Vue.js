<template>
  <div class="home">
    <h1 v-border:solid.round.shadow="{width: '5px', color: 'blue'}">Home</h1>
    <!-- filterの使用方法 -->
    <!-- 続けてfilterを連結使用した場合は先に指定された方が先に実行される
    下記の場合は最終的に小文字に変わる -->
    <h2>{{ title | upperCase | lowerCase }}</h2>
    <p>{{ subtitile | lowerCase }}</p>
    <HomeMixIn></HomeMixIn>
  </div>
</template>

<script>
import HomeMixIn from "./HomeMixIn"
import { mixIn } from "@/mixIn"

export default {
  // ローカルでディレクティブを作成する場合
  // thisは使用することができないということを注意する
  // directives: {
  //   border(el, binding) {
  //     el.style.borderWidth = binding.value.width;
  //     el.style.borderColor = binding.value.color;
  //     // 引数を使用する場合はargで使う！引数は1つしかしてできない
  //     el.style.borderStyle = binding.arg;
  //     if (binding.modifiers.round){
  //       el.style.borderRadius = "0.5rem"
  //     }
  //     if (binding.modifiers.shadow){
  //       el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.8)";
  //     }
  //   }
  // }
  mixins: [mixIn],
  data() {
    return {
    }
  },
  // filterもディレクティブと同様にthisは使えない
  filters: {
    // mixInファイルに移動
  },
  components: {
    HomeMixIn,
  }
}
</script>

<style scoped>
  h1 {
    margin-bottom: 50px;
  }

  p {
    margin-bottom: 50px;
  }
</style>