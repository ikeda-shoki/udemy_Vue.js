<template>
  <TabHeader tab-header="About"></TabHeader>
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