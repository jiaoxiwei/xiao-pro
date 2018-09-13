<template>
  <block class="x-page">
    <block class="x-page-item x-page-prev">上一页</block>
    <block class="x-page-item x-page-num">1</block>
    <block class="x-page-item x-page-num">2</block>
    <block class="x-page-item x-page-num">3</block>
    <block class="x-page-item x-page-num">4</block>
    <block class="x-page-item x-page-num">5</block>
    <block class="x-page-item x-page-num">6</block>
    <block class="x-page-item x-page-num">...</block>
    <block class="x-page-item x-page-next">下一页</block>
  </block>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
.x-page{
  text-align: center;
}
.x-page .x-page-item {
  display: inline-block;
  background: #fff;
  color: #999999;
  height: 48px;
  line-height: 48px;
  text-align: center;
  margin: 0 4px;
  cursor: pointer;
}
.x-page-num{
  width: 48px;
}
.x-page-prev,.x-page-next{
  width: 78px;
}
</style>
