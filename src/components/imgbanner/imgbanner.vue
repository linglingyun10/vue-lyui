<template>
  <div class="dn-banner__content dn-banner__img" :style="{width: width,height: height}" v-if="bannerType === 'banner0'">
    <a class="dn-banner__link" :href="link" target="_blank">
      <div class="dn-banner__scale">
        <img :src="imgUrl"/>
        <p class="dn-banner__title" :style="styles">
          <span>{{title}}</span>
        </p>
      </div>
    </a>
 </div>
  <div class="home-play__swiper-slide" :style="{width: width}" v-else-if="bannerType === 'banner1'">
    <a :href="link" target="_blank" class="dn_banner1_a">
      <img :src="imgUrl" alt="" />
      <p class="title">{{title}}</p>
    </a>

  </div>
  <div class="home-play__swiper-slide" :style="{width: width}" v-else>
    <div class="dn-game-panel__banner">
      <a class="dn-game-panel__banner-link"
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
        style.backGround = this.background
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
.dn_banner1_a {
  img {
    display: block;
    width: 244px;
    height: 196px;
  }
  p.title {
    font-size: 14px;
    color: #878686;
    padding: 24px 20px 24px 20px;
  }
}
</style>