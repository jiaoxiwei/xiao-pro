<template>
    <block class="index-foot">
      <block class="link">
        <a href="javascript:;">网站首页</a>
        <block>-</block>
        <a href="javascript:;">关于我们</a>
        <block>-</block>
        <a href="javascript:;">联系我们</a>
        <block>-</block>
        <a href="javascript:;">错误反馈</a>
      </block>
      <block class="rights">
        Copyright ©2018 xiaopro. All Rights Reserved. Current version is 1.0.0<br>
        渝ICP备14020137号
      </block>
    </block>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
.index-foot{
  margin-top: 30px;
  background: #fff;
  text-align: center;
}
.index-foot .rights{
  height: 50px;
  font-size: 13px;
  background: #F6F6F6;
  padding: 14px 0;
}
.index-foot .link{
  height: 100px;
  line-height: 100px;
}
.index-foot .link *{
  display: inline-block;
  color: #9BA4B6;
}
.index-foot .link a{
  text-decoration: none;
}
.index-foot .link a:hover{
  text-decoration: underline;
}
</style>
