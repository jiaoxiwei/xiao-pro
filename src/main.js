// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMixin from './mixins/index.js'

import XRow from './components/x-row/index.vue'
import XMask from './components/x-mask/index.vue'
import XBlock from './components/x-block/index.vue'
import XButton from './components/x-button/index.vue'
import XClearWrap from './components/x-clear-wrap/index.vue'

Vue.config.productionTip = false
Vue.mixin(VueMixin)

Vue.component('x-row', XRow)
Vue.component('x-mask', XMask)
Vue.component('x-block', XBlock)
Vue.component('x-button', XButton)
Vue.component('x-clear-wrap', XClearWrap)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
