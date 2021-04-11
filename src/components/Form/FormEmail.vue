<template>
  <div>
    <label for="email">Email</label>
    <input type="text" id="email" :value="value" @change="$emit('input', $event.target.value)">
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  props: [
    "value",
  ]
}
</script>

<style scoped>
label {
    margin-right: 20px;
  }
</style>