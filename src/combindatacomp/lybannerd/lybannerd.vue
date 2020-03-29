<template>
  <ly-banner height="416px" :autoplay='autoplay' indicator-position="outside" arrow="never">
        <ly-banner-item v-for="(bannerItem, index) in dataList" :key="index">
          <template v-slot:banslot0>
              <ly-imgbanner :title="bannerItem.children[0].attrs.title" :link="bannerItem.children[0].attrs.link" :imgUrl="bannerItem.children[0].attrs.imgUrl" :width="bannerItem.children[0].attrs.width"></ly-imgbanner>
          </template>
          <template v-slot:banslot1>
              <ly-imgbanner :title="bannerItem.children[1].attrs.title" :link="bannerItem.children[1].attrs.link" :imgUrl="bannerItem.children[1].attrs.imgUrl" :width="bannerItem.children[1].attrs.width"></ly-imgbanner>
          </template>
          <template v-slot:banslot2>
              <ly-imgbanner :title="bannerItem.children[2].attrs.title" :link="bannerItem.children[2].attrs.link" :imgUrl="bannerItem.children[2].attrs.imgUrl" :width="bannerItem.children[2].attrs.width"></ly-imgbanner>
          </template>
          <template v-slot:banslot3>
              <ly-imgbanner :title="bannerItem.children[3].attrs.title" :link="bannerItem.children[3].attrs.link" :imgUrl="bannerItem.children[3].attrs.imgUrl" :width="bannerItem.children[3].attrs.width"></ly-imgbanner>
          </template>
        </ly-banner-item>
  </ly-banner>
</template>
<script>
import TGBUSHTTP from '../../http/tgbushttp'
export default {
  name: 'LyBannerd',
  props: {
    initialIndex: {
      type: Number,
      default: 0
    },
    styleType: {
      type: String,
      default: 'el-carousel__button0'
    },
    height: String,
    trigger: {
      type: String,
      default: 'hover'
    },
    interval: {
      type: Number,
      default: 3000
    },
    indicatorPosition: String,
    indicator: {
      type: Boolean,
      default: true
    },
    arrow: {
      type: String,
      default: 'hover'
    },
    type: String,
    loop: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1;
      }
    },
    split: {
      type: Boolean,
      default: true
    }
//  serverdata: {
//    type: Boolean,
//    default: false
//  }
  },

  data() {
    return {
      'slot': 'banslot0',
     'autoplay': false,
     'dataList': []
  }
  },
  computed: {
  },
//watch: {
//  'serverdata': {
//    handler: function (val) {
//      console.log('=====val==', val)
//      if(val === true) {
//        this.getDataFromServer()
//      }
//    },
//    immediate:true
//  }
//},

  methods: {
    handleIndicatorHover(index) {
//    if (this.trigger === 'hover' && index !== this.activeIndex) {
//      this.activeIndex = index;
//    }
    },
    getDataFromServer() {
      //  // 从后台请求数据
      let params = {}
      TGBUSHTTP.getCarouselData(params, (resp) => {
        let banners = resp.data.hasSource
        this.dataList = []
        for (let index = 0; index < 3; index++) {
          let bannerItem = {}
          bannerItem.children = []
          let newValues = banners.slice(index * 4, (index + 1) * 4);
          for(let m = 0; m < newValues.length; m++) {
            let imgbanner = {attrs: {}}
            imgbanner.attrs.link = newValues[m].url
            imgbanner.attrs.title = newValues[m].title
            imgbanner.attrs.imgUrl = '//img2.tgbus.com/i/720_414'+ newValues[m].pic
            bannerItem.children.push(imgbanner)
          }
          this.dataList.push(bannerItem)
        }
      })
    }
  },
  mounted() {
      this.getDataFromServer()
  }
};
</script>
