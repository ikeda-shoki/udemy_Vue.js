<template>
  <div>
    <label>{{ formTitle }}</label>
      <!-- eventリスナーのチェックボックス(boolean型)はcheckedで値を検知するがvalueがbooleanではない場合はvalueで値を取得する -->
      <div v-for="(target, index) in targets" :key="index">
        <input type="checkbox" :id="target.value" :value="target.label" @input="updateValue">
        <label :for="target.value">{{ target.label }}</label>
      </div>
      <!-- 上記は繰り返しを使ったパターン
      しかし、これでは子コンポーネントでの切り替えがv-ifなどを使用するため醜くなることも考え親コンポーネンでpropsでオブジェクトを渡すように指示する方がよい -->
      <input type="checkbox" id="10" value="10代" @input=updateValue>
      <label for="10">10代</label>
      <input type="checkbox" id="20" value="20代" @input=updateValue>
      <label for="20">20代</label>
      <input type="checkbox" id="30" value="30代" @input=updateValue>
      <label for="30">30代</label>
      <p v-if="value.length">{{ value }}</p>
      <p v-else>選択されていません</p>
  </div>
</template>

<script>
export default {
  props: {
    formTitle: {
      type: String,
    },
    value: {
      type: Array
    }
  },
  data() {
    return {
      values: this.value,
      // おそらく下記の内容は親コンポーネントからpropsを用いて子コンポーネントで使用する方が良い
      targets: [
        { label: "10代", value: "10" },
        { label: "20代", value: "20" },
        { label: "30代", value: "30" },
      ]
    }
  },
  methods: {
    updateValue(e) {
      if(e.target.checked) {
        this.values.push(e.target.value);
      } else {
        this.values = this.values.filter(v => v !== e.target.value);
      }
      this.$emit('input', this.values);
    }
  },
}
</script>

<style>

</style>