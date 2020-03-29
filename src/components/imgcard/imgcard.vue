<template>
  <div class="dn-card"
    :class="{
      'is-score': data.reviewscore !== -1,
      'is-description': data.widthDescription
    }" :style="{'width': data.width || '100%'}">
    <a class="dn-card__link" :href="data.href" target="_blank">
      <div :class="[!(data.isScale)?'dn-card_noscale': '', 'dn-card__banner', data.hasRadius? 'dn-img-radius': '']" :style="{'padding-top': data.aspectRatio || '56.62%'}">
        <img :src="data.imageURL" :alt="data.titleshort"/>
      </div>
      <div class="dn-card__outer">
        <span class="dn-card__rate" v-if="data.reviewscore !== -1 "
          :style="{
            width: (50 * data.reviewscore / 10) + '%',
            display: (data.reviewscore==0 ? 'none' : 'block'),
            backgroundColor: colors[parseInt(data.reviewscore/2) === 5 ? 4 : parseInt(data.reviewscore/2)]
          }">
          {{(data.reviewscore + '' ).indexOf('.') > 0 ? data.reviewscore : data.reviewscore + ('.0')}}
        </span>
        <div class="dn-card__inner" :style="{backgroundColor: data.backgroundColor || '#ffffff', height: data.widthDescription ? '110px' : '90px'}">
          <span class="dn-card__title dn-card__home-title" :style = "styl">{{data.title}}</span>
          <p class="dn-card__description" v-if="data.widthDescription" :style="pstyl">{{data.description || data.titleshort}}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import Card from '../../store/model/card.js';

export default {
  name: 'ly-imgcard',
  props: {
    data: {
      type: Object,
      default() {
        return new Card();
      }
    },
    colors: {
      type: Array,
      default() {
        return ['#ff3333', '#ff7e34', '#ffcc00', '#58d000', '#24cf4c'];
      }
    }
  },
  computed: {
    styl () {
      let styleTemp = {}
      styleTemp.fontSize = this.data.titleSize + 'px'
      styleTemp.lineHeight = this.data.titleLH + 'px'
      styleTemp.bold = this.data.bold
      return styleTemp
    },
    pstyl() {
      let stylTemp = {}
      stylTemp.fontSize = this.data.descriptionSize + "px"
      stylTemp.lineHeight = this.data.descriptionLH + "px"
      return stylTemp
    }
  },
  mounted () {
    console.log('==imgcard===', this.data)
  }
};
</script>
<style lang="less">
  .dn-card_noscale {
    img {
      object-fit: cover;
      &:hover {
        transform: scale(1);
      }
    }
  }
	.dn-card__banner img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
	   object-fit: cover;
    -o-object-fit: cover;
    object-fit: cover;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: all .7s ease 0s;
    transition: all .7s ease 0s;
    -webkit-transform-origin: center;
    transform-origin: center;
}
.dn-img-radius {
  border-radius: 8px 8px 0 0;
}
</style>
