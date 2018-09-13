<template>
  <block class="index-body">
    <row>
      <block>
        <tip-label>最新作品</tip-label>
      </block>
      <body-content />
      <x-page />
    </row>
  </block>
</template>

<script>
import BodyAside from './aside/index.vue'
import BodyContent from './content/index.vue'
import TipLabel from '../../tip-label/index.vue'
import XPage from '../../x-page/index.vue'
export default {
  name: 'index',
  components: {
    XPage,
    TipLabel,
    BodyAside,
    BodyContent
  }
}
</script>

<style scoped>
.index-body{
  margin-top: 30px;
}
.index-body .rows{
}
</style>
