<template>
  <div class="tab-header">
    <h1>{{ tabHeader }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    tabHeader: {
      type: String,
    }
  }
}
</script>