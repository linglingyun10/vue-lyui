<template>
  <div class="">
   <div class="block">
    <span class="demonstration">默认 Hover 指示器触发</span>
    <ly-carousel height="150px" :autoplay='autoplay'ref="carousel">
      <ly-carousel-item>
        <ly-row class="ly-row">
          <ly-col :span="8"><div class="grid-content bg-purple bg-blue"></div></ly-col>
          <ly-col :span="8"><div class="grid-content bg-purple bg-green"></div></ly-col>
          <ly-col :span="8"><div class="grid-content bg-purple bg-red"></div></ly-col>
        </ly-row>
      </ly-carousel-item>
      <ly-carousel-item>
        <ly-row>
          <ly-col :span="12"><div class="grid-content bg-purple"></div></ly-col>
          <ly-col :span="12"><div class="grid-content bg-purple"></div></ly-col>
        </ly-row>
      </ly-carousel-item>
      <ly-carousel-item>
        <ly-row>
          <ly-col :span="12"><div class="grid-content bg-purple"></div></ly-col>
          <ly-col :span="12"><div class="grid-content bg-purple"></div></ly-col>
        </ly-row>
      </ly-carousel-item>
    </ly-carousel>
  </div>
  <div class="">
  	<ly-button type="primary" @click="setCarouselItem">设置ActiveItem</ly-button>
  </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        'autoplay': false
      }
    },
    methods: {
     setCarouselItem () {
      this.$refs.carousel.setActiveItem(1)
     }
    },
    mounted () {
      console.log(this.$refs.carousel)
    }
  }
</script>

<style>
  .block {
        padding: 30px;
    text-align: center;
    border-right: 1px solid #eff2f6;
    display: inline-block;
    width: 49%;
    box-sizing: border-box;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  
  .bg-purple {
    background: #d3dce6;
    width: 100%;
    height: 100%;
  }
  .ly-row {
    width: 100%;
    height: 150px;
  }
  .el-col {
    height: 150px;
  }
  .bg-blue {
    background: blue;
  }
  .bg-green {
    background: green;
  }
  .bg-red {
    background: red;
  }
</style>