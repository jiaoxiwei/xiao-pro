<template>
  <block class="content-item">
    <block class="content-inside">
      <block class="content-img" />
      <block class="content-desc">
        Vue.js 本身就是一个独立的前端框架，在浏览器中完全能够不基于 Weex 容器渲染。因此，针对 Weex 平台扩展 Vue.js 的 Web 端组件，和直接使用 Vue.js 开发一个 Web 组件是一样的。具体的组件编写方法可以参考其官方文档：组件 ，另外建议使用 .vue 格式的文件编写组件，使用方法参考：单文件组件。
      </block>
      <block class="content-icon">
        <block class="content-icon-item">
          <img src="./img/view.png">
          <block>15984</block>
        </block>
        <block class="content-icon-item">
          <img src="./img/down.png">
          <block>下载</block>
        </block>
        <block class="content-icon-item">
          <img src="./img/view.png">
          <block>在线预览</block>
        </block>
      </block>
    </block>
  </block>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
.content-item{
  width: 314px;
  height: 260px;
  background: #ffffff;
  padding: 14px;
  box-sizing: border-box;
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
  transition: all .23s linear;
}
.content-item:hover{
  transform: translateY(-10px);
  box-shadow: 10px 0px 20px rgba(0,0,0,0.06);
}
.content-inside{
  width: 100%;
  box-sizing: border-box;
}
.content-img{
  height: 140px;
  background: #f5f5f5;
  overflow: hidden;
  border-radius:5px;
}
.content-img img{
  width: 100%;
}
.content-desc{
  word-break: break-all;
  height: 40px;
  line-height: 22px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  margin: 18px 0;
}
.content-icon{
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  align-items: center;
  color: #9BA4B6;
}
.content-icon-item{
  display: flex;
  align-items: center;
}
.content-icon-item img{
  width: 14px;
  height: 14px;
  display: block;
  margin-right: 4px;
}
</style>
