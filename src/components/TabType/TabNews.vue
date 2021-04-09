<template>
  <div class="tab-main">
    <TabHeader tab-header="News"></TabHeader>
  </div>
</template>

<script>
import TabHeader from './TabHeader'

export default {
  props: {
    tabTitle: {
      type: String,
    }
  },
  components: {
    TabHeader,
  }
}
</script>