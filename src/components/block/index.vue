<template>
  <div>{{content}}<slot></slot></div>
</template>

<script>
export default {
  name: 'index',
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
