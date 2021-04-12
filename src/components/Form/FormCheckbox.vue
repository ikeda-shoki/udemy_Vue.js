<template>
<div>
  <label :for="formTitle">{{ formTitle }}</label>
  <template v-for="(option, index) in options">
    <label :key="index">
      <input type="checkbox" :value="option.value" @change="updateValue">
      {{ option.label }}
    </label>
  </template>
  <p v-if="values === ['1']">公開</p>
</div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    formTitle: {
      type: String,
    },
  },
  data() {
    return {
      values: []
    }
  },
  methods: {
    updateValue(e) {
      if(e.target.checked) {
        this.values.push(e.target.value);
      } else {
        this.values = this.values.filter(v => v !== e.target.value);
      }
      this.$emit("change", this.values);
    }
  }
}
</script>

<style scoped>

</style>