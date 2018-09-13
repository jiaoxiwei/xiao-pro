<template>
  <x-clear-wrap class="body-content">
    <content-item v-for="(item, index) in [1,2,3,4,5]" :key="index" />
  </x-clear-wrap>
</template>

<script>
import ContentItem from '../item/index.vue'
export default {
  name: 'index',
  components: {
    ContentItem
  }
}
</script>

<style scoped>
.body-content{
  margin-top: 20px;
  box-sizing: border-box;
  width: 1002px;
}
</style>
