// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMixin from './mixins/index.js'

import Row from './components/row/index.vue'
import Block from './components/block/index.vue'
import PureButton from './components/pure-button/index.vue'
import ClearWrap from './components/clear-wrap/index.vue'

Vue.config.productionTip = false
Vue.mixin(VueMixin)

Vue.component('row', Row)
Vue.component('block', Block)
Vue.component('clear-wrap', ClearWrap)
Vue.component('pure-button', PureButton)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
