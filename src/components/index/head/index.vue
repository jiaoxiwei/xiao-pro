<template>
  <block class="index-head">
    <row>
      <head-logo />
      <head-nav />
      <head-user />
    </row>
  </block>
</template>

<script>
import HeadNav from './nav/index.vue'
import HeadLogo from './logo/index.vue'
import HeadUser from './user/index.vue'
export default {
  name: 'index',
  components: {
    HeadNav,
    HeadLogo,
    HeadUser
  }
}
</script>

<style scoped>
.index-head{
  background: #ffffff;
}
.index-head .rows{
  display: flex;
  align-items: center;
}
</style>
