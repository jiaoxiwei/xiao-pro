<template>
  <x-block class="x-page">
    <x-block class="x-page-item x-page-prev">上一页</x-block>
    <x-block class="x-page-item x-page-num">1</x-block>
    <x-block class="x-page-item x-page-num">2</x-block>
    <x-block class="x-page-item x-page-num">3</x-block>
    <x-block class="x-page-item x-page-num">4</x-block>
    <x-block class="x-page-item x-page-num">5</x-block>
    <x-block class="x-page-item x-page-num">6</x-block>
    <x-block class="x-page-item x-page-num">...</x-block>
    <x-block class="x-page-item x-page-next">下一页</x-block>
  </x-block>
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
