<template>
  <div class="home">
    <h2>{{ title | upperCase | lowerCase }}</h2>
    <p>{{ subtitile | lowerCase }}</p>
  </div>
</template>

<script>
import { mixIn } from "@/mixIn"

export default {
  mixins: [mixIn]
}
</script>

<style scoped>
  h1 {
    margin-bottom: 50px;
  }
</style>