<template>
  <x-block class="head-nav">
    <x-block
      class="head-nav-item"
      v-for="(item, index) in navRouter" :key="index"
    >{{item.name}}</x-block>
  </x-block>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      navRouter: [
        {
          name: '首页',
          path: '/'
        },
        {
          name: '前端资源',
          path: '/front'
        },
        {
          name: '设计UI资源',
          path: '/design'
        },
        {
          name: '前端学习',
          path: '/fort-learn'
        },
        {
          name: '其他',
          path: '/other'
        }
      ]
    }
  }
}
</script>

<style scoped>
.head-nav{
  flex: 1;
  display: flex;
  box-sizing: border-box;
  padding-left: 40px;
}
.head-nav-item{
  height: 72px;
  line-height: 72px;
  font-size: 16px;
  color: #9BA4B6;
  box-sizing: border-box;
  cursor: pointer;
  margin-right: 40px;
  transition: background-color .12s linear;
  position: relative;
}
.head-nav-item:first-child{
  color: #3778F8;
}
.head-nav-item:first-child:after{
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height:4px;
  background:#3778F8;
}
/*.head-nav-item:hover{*/
  /*border-color: #0381f4;*/
  /*background: #fff;*/
  /*color: #0381f4;*/
/*}*/
</style>
