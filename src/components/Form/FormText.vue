<template>
  <div>
    <label :for="formTitle">{{ formTitle }}</label>
    <input :type="formType" :id="formTitle" :value="value" @change="$emit('input', $event.target.value)">
    <pre>{{ value }}</pre>
  </div>
</template>

<script>
export default {
  props: [
    "value",
    "formTitle",
    "formType"
  ],
}
</script>

<style scoped>
label {
    margin-right: 20px;
  }
</style>