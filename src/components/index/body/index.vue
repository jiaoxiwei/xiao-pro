<template>
  <x-block class="index-body">
    <x-row>
      <x-block>
        <x-title-label>最新作品</x-title-label>
      </x-block>
      <body-content />
      <x-page />
    </x-row>
  </x-block>
</template>

<script>
import BodyAside from './aside/index.vue'
import BodyContent from './content/index.vue'
import XTitleLabel from '../../x-title-label/index.vue'
import XPage from '../../x-page/index.vue'
export default {
  name: 'index',
  components: {
    XPage,
    XTitleLabel,
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
