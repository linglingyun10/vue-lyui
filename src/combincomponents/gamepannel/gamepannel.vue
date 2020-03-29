<template>
  <div class="dn-game-panel">
    <div class="dn-game-panel__box home__block-hover-nbg-l">
      <div class="dn-game-panel__container swiper-container-game">
        <a class="dn-game-panel__header" :href="moreLinks[type]" target="_blank"
            :class="{'hd1': type === 'tgbus_home_dwpd1', 'hd2': type === 'tgbus_home_dwpd2', 'hd3': type === 'tgbus_home_dwpd3'}">
          <img :src="headerLogo[type]" alt=""/>
          <span class="dn-game-panel__more-link">进入频道</span>
        </a>
          <ly-banner :split="split" arrow="never">
            <ly-banner-item v-for="(cItem, cIndex) in infoList.slice(0, 3)" :key="cIndex">
              <template v-slot:banslot0>
              <ly-imgbanner bannerType="banner1" :title="cItem.title" :link="cItem.locationlink == null ? cItem.url : cItem.locationlink" :imgUrl="cItem.pic" width="100%"></ly-imgbanner>
             </template>
            </ly-banner-item>
          </ly-banner>
      </div>
      <ly-infolist>
        <ly-infolistitem v-for="(item, index) in infoList.slice(3,8)" :key="index"
           :title="item.title"
           :titleshort="item.titleshort"
           :link="item.locationlink == null?item.url : item.locationlink"
           :imgUrl="item.imgUrl"
           :summary="item.summary"
           >
        </ly-infolistitem>
      </ly-infolist>
    </div>
  </div>
</template>

<script>
  import TGBUSHTTP from '../../http/tgbushttp'
  export default {
    name: 'ly-gamepannel',
    data: () => {
      return {
        split: false,
        moreLinks: {
          'tgbus_home_dwpd1': 'http://ps4.tgbus.com/',
          'tgbus_home_dwpd2': 'http://switch.tgbus.com/',
          'tgbus_home_dwpd3': 'http://xboxone.tgbus.com/'
        },
        headerLogo: {
          'tgbus_home_dwpd1': '//xyoss.g.com.cn/6scVox-hwIzsm68peYzWG2AMmso=/tgbus/ps4_1528796271802.png',
          'tgbus_home_dwpd2': '//xyoss.g.com.cn/ietpBy0F2Eq1YEVFh1YvilUsWVY=/tgbus/switch_1528796213211.png',
          'tgbus_home_dwpd3': '//xyoss.g.com.cn/SIYDYvaUDebEpFg_auhvHbsNRvQ=/tgbus/XboxOne_1528796255850.png'
        },
        infoList: []
      }
    },
    props: {
      type: {
        type: String,
        default: 'tgbus_home_dwpd1'
      }
    },
    filters: {
      imgURL: function(path, size) {
        return '//img2.tgbus.com/i/' + size + path;
      },
      capitalize: function(value) {
        if (!value) {
          return '';
        } else {
          value = value.toString();
          return value.replace(/&(nbsp);/ig, '');
        }
      }
    },
    methods: {
      getDataFromServer() {
        let params = {}
        TGBUSHTTP.getGamePannelData({type: this.type}, (resp) => {
          this.infoList = resp.data.hasSource
        })
      }
    },
    mounted() {
        this.getDataFromServer()
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .el-carousel__button {
    width: 26px !important;
  }
</style>