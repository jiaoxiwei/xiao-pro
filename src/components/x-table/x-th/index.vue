<template>
  <x-block class="x-th">
    <slot></slot>
  </x-block>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
.x-th{
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #000;
}
</style>
