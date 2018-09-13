<template>
  <x-block class="x-tr">
    <slot></slot>
  </x-block>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
.x-tr{
  display: flex;
}
</style>
