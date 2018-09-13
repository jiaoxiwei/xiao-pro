<template>
  <block class="container">
    <index-head />
    <index-body />
    <index-foot />
  </block>
</template>

<script>
import IndexHead from '../components/index/head/index.vue'
import IndexBody from '../components/index/body/index.vue'
import IndexFoot from '../components/index/foot/index.vue'
export default {
  name: 'index',
  components: {
    IndexFoot,
    IndexHead,
    IndexBody
  }
}
</script>

<style scoped>

</style>
