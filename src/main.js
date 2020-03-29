import Vue from 'vue'
import App from './App'
import router from './router'
//import '../dist/lyui.rem.css'
import './lyui.flexible.js'
import LYUI from './lyui.js'
//import LYUI from '../dist/lyui.rem.js'
import './assets/less/components/row.scss'
import './assets/less/components/col.scss'
//import '../dist/manifest.js'
//import '../dist/vendor.js'
//import './lyui.flexible.js'
//import LYUI from '../dist/lyui.rem.js'

Vue.use(LYUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
