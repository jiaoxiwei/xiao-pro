<template>
  <clear-wrap class="rows">
    <slot></slot>
  </clear-wrap>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
.rows{
  width: 980px;
  margin: 0 auto;
  overflow-x: hidden;
}
.rows:after,
.rows:before{
  content: '';
  display: block;
  clear: both;
}
</style>
