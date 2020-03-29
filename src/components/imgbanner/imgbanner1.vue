<template>
  <!--<div class="dn-banner__content dn-banner__img" :style="{width: width,height: height}" v-if="bannerType === 'banner0'">
    <a class="dn-banner__link" :href="link" target="_blank">
      <div class="dn-banner__scale">
        <img :src="imgUrl"/>
        <p class="dn-banner__title" :style="styles">
          <span>{{title}}</span>
        </p>
      </div>
    </a>
 </div>-->
  <div class="home-play__swiper-slide" :style="{width: width}">
        <div class="dn-game-panel__banner">
          <a :class="['dn-game-panel__banner-link', {bannerType === 'banner0' ? 'dn-banner__scale': ''}]"
            :href="link" target="_blank">
            <img class="dn-game-panel__banner-image" :src="imgUrl" alt=""/>
            <div class="dn-game-panel__banner-title" :style="styles">
              <span>{{title}}</span>
            </div>
          </a>
        </div>
      </div>
</template>
<script>
  export default {
    name: 'ly-imgbanner',
    props: {
      bannerType: {
        type: String,
        default: 'banner0'
      },
      title: {
        type: String,
        default: ''
      },
      link: {
        type: String,
        default: ''
      },
      imgUrl: {
        type: String,
        default: ''
      },
      paddingBottom: {
        type: String,
        default: ''
      },
      width: {
        type: [Number, String],
        default: '389px'
      },
      height: {
        type: [Number, String],
        default: '200px'
      },
      bgHeight: [Number, String],
      background: String
    },
    computed: {
      styles () {
        let style ={}
        style.backGround = this.sbackground
        style.height = this.bgHeight
        return style
      }
    },
    data() {
      return {
//      height: '500px'
      }
    }
  }
</script>
<style lang="less" scoped="scoped">
.home-play__swiper-slide {
	height: 100%;
	.dn-game-panel__banner {
		height: 100%;
	}
}
</style>
<style lang="less" >
.dn-banner__scale:hover img {
  transform: scale(1) !important;
}
.dn-banner__img {
  display: block !important;
  height: 100%;
  /*min-height: 220px;*/
  &:after {
    padding-top: 0 !important;
  }
}
</style>