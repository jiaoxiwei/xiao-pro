<template>
  <block class="pure-button" :class="[bindTypeClassName, bindSizeClassName]">{{content}}<slot></slot></block>
</template>

<script>
export default {
  name: 'index',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'middle'
    },
    content: {
      type: String,
      default: ''
    }
  },
  computed: {
    bindTypeClassName () {
      if (this.type === 'default') {
        return 'pure-button-type-default'
      } else if (this.type === 'primary') {
        return 'pure-button-type-primary'
      } else if (this.type === 'danger') {
        return 'pure-button-type-danger'
      } else if (this.type === 'warn') {
        return 'pure-button-type-warn'
      }
    },
    bindSizeClassName () {
      if (this.size === 'small') {
        return 'pure-button-size-small'
      } else if (this.size === 'middle') {
        return 'pure-button-size-middle'
      } else if (this.size === 'big') {
        return 'pure-button-size-big'
      }
    }
  }
}
</script>

<style scoped>
.pure-button{
  box-sizing: border-box;
  display: inline-block;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  font-family: 微软雅黑;
  padding: 0 12px;
  height: 30px;
  line-height: 30px;
  background: #FFF;
  color: #666;
  border: 1px solid #ddd;
  border-radius: 2px;
  user-select: none;
  cursor: pointer;
}
.pure-button-size-small{
  padding: 0 18px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
}
.pure-button-size-middle{
  padding: 0 26px;
  height: 38px;
  line-height: 38px;
  font-size: 15px;
}
.pure-button-size-big{
  padding: 0 32px;
  height: 46px;
  line-height: 46px;
  font-size: 16px;
}
  .pure-button-type-default{
    background: #fff;
    color: #666;
  }
  .pure-button-type-primary{
    background: #2196F3;
    color: #fff;
    border-color: rgba(0,0,0,.1);
  }
.pure-button-type-danger{
  background: #d51f12;
  color: #fff;
  border-color: rgba(0,0,0,.1);
}
.pure-button-type-warn{
  background: #ebc246;
  color: #fff;
  border-color: rgba(0,0,0,.1);
}
</style>
