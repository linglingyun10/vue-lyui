<template>
  <div>
    <!-- <lyui-nav-bar
      v-show="title"
      class="lyui-doc-nav-bar"
      :title="title"
      :border="false"
      :left-arrow="showNav"
      @click-left="onBack"
    />
    <lyui-notice-bar
      v-if="weapp"
      v-show="title"
      wrapable
      :text="tips"
      background="#ecf9ff"
      color="rgba(52, 73, 94, 0.8)"
      style="font-size: 12px;"
    /> -->
    <!-- <keep-alive>
      <router-view :weapp="weapp" />
    </keep-alive> -->
  </div>
</template>

<script>
import routes from '../router';
function getQueryString(name) {
  const arr = location.search.substr(1).split('&');
  for (let i = 0, l = arr.length; i < l; i++) {
    const item = arr[i].split('=');
    if (item.shift() === name) {
      return decodeURIComponent(item.join('='));
    }
  }
  return '';
}

export default {
  computed: {
    title() {
      return "test"
      // const { name } = this.$route.meta;
      // return name ? name.replace(/-/g, '') : '';
    },

    showNav() {
      return true
      // return getQueryString('hide_nav') !== '1';
    },

    weapp() {
      return getQueryString('weapp') === '1';
    }
  },

  beforeCreate() {
    this.tips = 'Tips: 当前预览的是 Vue 版 lyuit 的示例，少部分功能可能与小程序版有出入，请以文档描述和实际效果为准。';
  },

  methods: {
    onBack() {
      history.back();
    }
  },
  mounted() {
    console.log(routes)
  }
};
</script>

<style lang="less">
// @import '../../../src/style/var';

// body {
//   min-width: 100vw;
//   color: @text-color;
//   font-family: 'PingFang SC', Helvetica, 'STHeiti STXihei', 'Microsoft YaHei', Tohoma, Arial, sans-serif;
//   line-height: 1;
//   background-color: #f8f8f8;
//   -webkit-font-smoothing: antialiased;
// }

// ::-webkit-scrollbar {
//   width: 0;
//   background: transparent;
// }

// .lyui-doc-nav-bar {
//   height: 56px;
//   line-height: 56px;

//   .lyui-nav-bar__title {
//     font-size: 17px;
//     text-transform: capitalize;
//   }

//   .lyui-icon {
//     color: @gray-dark;
//     font-size: 24px;
//     cursor: pointer;
//   }
// }

// .lyui-doc-demo-section {
//   margin-top: -56px;
//   padding-top: 56px;
// }
</style>
