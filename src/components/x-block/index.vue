<template>
  <div :x-block-id="deepId">{{content}}<slot></slot></div>
</template>

<script>
let deepId = 0
export default {
  name: 'index',
  data () {
    return {
      deepId: deepId++
    }
  },
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
