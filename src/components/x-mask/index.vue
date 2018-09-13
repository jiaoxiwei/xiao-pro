<template>
  <x-block
    class="x-mask"
    :style="{
      'opacity': parseFloat(opacity),
      'position': position,
      'z-index': zIndex
      }"><slot></slot></x-block>
</template>

<script>
export default {
  name: 'index',
  props: {
    position: {
      type: String,
      default: 'absolute'
    },
    zIndex: {
      type: String,
      default: '1000'
    },
    opacity: {
      type: String,
      default: '0.6'
    }
  }
}
</script>

<style scoped>
.x-mask{
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #000;
  font-size: 14px;
  box-sizing: border-box;
  padding: 20px;
  color: #fff;
  white-space: pre;
}
</style>
