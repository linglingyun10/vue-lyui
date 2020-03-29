import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
   {
     path: '/',
     redirect: {
       path: '/button'
     }
   },
   {
     path: '/button',
     component: (resolve) => require.ensure([], () => resolve(require('../example/button.vue')))
   },
   {
     path: '/sendcode',
     component: (resolve) => require.ensure([], () => resolve(require('../example/sendcode.vue')))
   },
   {
     path: '/input',
     component: (resolve) => require.ensure([], () => resolve(require('../example/input.vue')))
   },
   {
     path: '/icon',
     component: (resolve) => require.ensure([], () => resolve(require('../example/lyicon.vue')))
   },
   {
     path: '/upload',
     component: (resolve) => require.ensure([], () => resolve(require('../example/upload.vue')))
   },
   {
     path: '/progress',
     component: (resolve) => require.ensure([], () => resolve(require('../example/progress.vue')))
   },
   {
     path: '/keyboard',
     component: (resolve) => require.ensure([], () => resolve(require('../example/keyboard.vue')))
   },
   {
     path: '/lyrow',
     component: (resolve) => require.ensure([], () => resolve(require('../example/lyrow.vue')))
   },
   {
     path: '/lyimageban',
     component: (resolve) => require.ensure([], () => resolve(require('../example/imagebanner.vue')))
   },
   {
     path: '/imgcard',
     component: (resolve) => require.ensure([], () => resolve(require('../example/lyimgcard.vue')))
   },
   {
     path: '/carousel',
     component: (resolve) => require.ensure([], () => resolve(require('../example/bannertest/lybannertest.vue')))
   },
   {
     path: '/info',
     component: (resolve) => require.ensure([], () => resolve(require('../example/inlisttest.vue')))
   },
   {
     path: '/infocontainer',
     component: (resolve) => require.ensure([], () => resolve(require('../example/infocontainertest.vue')))
   },
   {
     path: '/gamelist',
     component: (resolve) => require.ensure([], () => resolve(require('../example/lygamepanneltest.vue')))
   },
   {
     path: '/lybannerd',
     component: (resolve) => require.ensure([], () => resolve(require('../example/bannertest/lybannerdtest.vue')))
   },
   {
     path: '/todotest',
     component: (resolve) => require.ensure([], () => resolve(require('../example/comtest/father.vue')))
   },
   {
     path: '/peoplecard',
     component: (resolve) => require.ensure([], () => resolve(require('../example/peoplecard.vue')))
   },
   {
     path: '/splitline',
     component: (resolve) => require.ensure([], () => resolve(require('../example/splitline.vue')))
   },
   {
     path: '/link',
     component: (resolve) => require.ensure([], () => resolve(require('../example/link.vue')))
   },
   {
     path: '/ly_col_back',
     component: (resolve) => require.ensure([], () => resolve(require('../example/ly_col_back.vue')))
   },
   {
     path: '/lybannertest99',
     component: (resolve) => require.ensure([], () => resolve(require('../example/bannertest/lybannertest99.vue')))
   }
  ]
})
export default router
