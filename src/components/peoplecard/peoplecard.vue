<template>
  <div class="guest" :style="{width: width}">
    <img :src="imgUrl">
    <h3 :style="styl">{{title}}</h3>
    <p v-if="showDesc">{{description}}</p>
    <!--<div class="guest-float">
      <h4>褚健<i class="icon-show"></i></h4>
      <!--<p class="intr">中控科技集团创始人，宁波工业互联网研究院创始人。曾任国家"863高技术研究计划专家委员会”专家、国家战略性新兴产业咨询专家委员会专家、全国工业过程测量与控制标准化技术委员会主任委员、中国机电一体化技术与应用协会理事长、中国仪器仪表学会副理事长等</p>-->
    <!--</div>-->
</div>
</template>

<script>
  export default {
    name: 'ly-peocard',
    props: {
      'title': String,
      'width': {
        type: String,
        default: '197px'
      },
      'height': {
        type: String,
        default: '273px'
      },
      'imgUrl': String,
      'titleP': {
        type: String,
        default: 'left'
      },
       showDesc: {
        type: Boolean,
        default: true
      },
      'description': String,
      'boderstyle': Number,
    },
    computed: {
      styl() {
        let temp = {}
        temp.textAlign = this.titleP
        temp.borderRadius = this.boderstyle + 'px'
        return temp
      }
    }
  }
</script>
<style lang="less" scoped="scoped">
  .guest {
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      background: #fff;
      img {
        display: block;
        width: 100%;
        height: 175px;
        object-fit: cover;
        margin-bottom: 15px;
      }
      h3 {
           padding: 0 10px;
          text-align: justify;
          font-family: 'Microsoft YaHei';
          font-size: 18px;
          font-weight: bold;
          color: #505050;
          margin-bottom: 7px;
          line-height: 1;
      }
      p {
        font-size: 12px;
        color: #767676;
        padding: 0 10px;
        font-family: 'Microsoft YaHei';
        text-align: justify;
        line-height: 1;
      }
  }
  .clearfix ::before, .clearfix ::after {
    content: "";
    display: block;
    height: 0;
    line-height: 0;
    overflow: hidden;
    clear: both;
}

</style>