<template>
  <header>
    <div></div>
    <p>{{ number }}</p>
    <button @click="increment"> +1 </button>
  </header>
</template>

<script>
export default {
  // コンポーネントではdataは関数でなければならない
  // template間でdataを共有してしてしまう為、関数で記載する
  data() {
    return{
      number: 12,
    }
  },
  methods: {
    increment: function() {
      if (this.number < 20) {
        this.number += 1;
      } else {
        this.number = 12;
      }
    }
  }
}
</script>