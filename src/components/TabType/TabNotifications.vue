<template>
  <TabHeader tab-header="Notifications"></TabHeader>
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