<template>
  <x-block class="x-td">
    <slot></slot>
  </x-block>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
.x-td{
  flex: 1;
  text-align: center;
}
</style>
