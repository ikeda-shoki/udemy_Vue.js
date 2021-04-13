<template>
  <div>
    <label :for="formTitle">{{ formTitle }}</label>
      <!-- eventリスナーのチェックボックス(boolean型)はcheckedで値を検知するので今までのvalueとは違う為、注意が必要 -->
      <input type="checkbox" id="isPrivate" :value="value" :checked="value" @input="$emit('input', $event.target.checked)">
      <p v-if="value === true">公開</p>
      <p v-else>非公開</p>
  </div>
</template>

<script>
export default {
  props: {
    formTitle: {
      type: String
    },
    value: {
      type: Boolean,
    }
  }
}
</script>

<style>

</style>