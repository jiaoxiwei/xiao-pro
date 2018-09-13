import Vue from 'vue'
import Template from '../components/x-dialog/index.vue'

const Dialog = Vue.extend(Template)
const dialogInstance = new Dialog()

export default {
  $isDef () {},
  $dialog (options = {}) {
    const dialogTitle = options.title || 'unknown'
    const dialogCancelFn = options.cancel || function () {}
    const dialogConfirmFn = options.confirm || function () {}
    const dialogTextContent = options.textContent || 'unknown'
    console.log(dialogInstance, dialogTitle, dialogCancelFn, dialogConfirmFn, dialogTextContent)
  }
}
