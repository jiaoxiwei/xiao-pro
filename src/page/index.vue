<template>
  <x-block class="container">
    <x-block v-if="false">
      <index-head />
      <index-body />
      <index-foot />
    </x-block>
    <x-button @click.native="show">click me</x-button>
  </x-block>
</template>

<script>
import IndexHead from '../components/index/head/index.vue'
import IndexBody from '../components/index/body/index.vue'
import IndexFoot from '../components/index/foot/index.vue'
export default {
  name: 'index',
  methods: {
    show () {
      this.$dialog({
        title: '系统提示',
        textContent: '123',
        confirm: () => {
        },
        cancel: () => {
        }
      })
    }
  },
  components: {
    IndexFoot,
    IndexHead,
    IndexBody
  }
}
</script>

<style scoped>

</style>
