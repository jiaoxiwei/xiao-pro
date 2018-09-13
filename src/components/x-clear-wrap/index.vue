<template>
  <x-block class="clear-wrap">
    <slot></slot>
  </x-block>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
.clear-wrap:before,
.clear-wrap:after{
  content: '';
  display: block;
  clear: both;
}
</style>
