<template>
  <x-block class="tip-label">
    <x-block><slot></slot></x-block>
  </x-block>
</template>

<script>
export default {
  name: 'index',
  props: {
    color: {
      type: String,
      default: 'black'
    }
  }
}
</script>

<style scoped>
.tip-label{
  position: relative;
  display: inline-block;
  padding-left: 10px;
  height: 18px;
  line-height: 18px;
  color: #3778F8;
}
.tip-label:before{
  content: '';
  display: block;
  width: 3px;
  height: 18px;
  left: 0;
  top: 0;
  background: #3778F8;
  position: absolute;
}
</style>
