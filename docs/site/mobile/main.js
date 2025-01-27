// import '../../../src/index.less';
import Vue from 'vue';
import VueRouter from 'vue-router';
// import routes from '../router';
import App from './App';
// import LyuiDoc from 'vue-lyuidoc'
// Vue.use(LyuiDoc)
import { importAll } from '../utils';
// import '@vant/touch-emulator';

// const componentMap = {};
// const context = require.context('../../../src', true, /demo\/index.vue$/);

// importAll(componentMap, context);

// const router = new VueRouter({
//   mode: 'hash',
//   routes: routes({ mobile: true, componentMap }),
//   scrollBehavior(to, from, savedPosition) {
//     return savedPosition || { x: 0, y: 0 };
//   }
// });

// router.afterEach(() => {
//   if (!router.currentRoute.redirectedFrom) {
//     Vue.nextTick(() => window.syncPath());
//   }
// });

// window.vueRouter = router;

if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = false;
}

new Vue({
  el: '#app',
  // router,
  render: h => h(App)
});
