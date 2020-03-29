<template>
  <div class="">
        <ly-row :gutter="16" >
          <ly-col :span="6" :ml="8"  class="dn-card-group__zone-item"
            v-for="(item, index) in 4 || []" :key="index">
             <ly-imgcard :data="imgcard"></ly-imgcard>
          </ly-col>
        </ly-row>
        
        <!--<ly-imgcard :data="imgcard1"></ly-imgcard>-->
        <ly-imgcard class="ly-imgcard1" :data="imgcard1"></ly-imgcard>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imgcard: 
          {
            "titleshort": "《全面战争模拟器》全兵种数据一览  兵种的属性都咋样",
            "title": "热血系列外传《热血少女》公布8分钟实机演示",
            "titleSize": 20,
            "titleLH": "40",
            "bold": 700,
            "backgroundColor": '#ffffff',
            "widthDescription": true,
            "description": "《热血少女》公布8分钟实机演示",
            "descriptionSize": "14px",
            "descriptionLH": "22px",
            "descriptionLines": 2,
            "reviewscore": -1,
            "padding": [
              "24px",
              "16px",
              "16px",
              "16px"
            ],
            "lines": 2,
            "isScale": false,
            "imageURL": "static/zhizhuxia.jpg",
            "width": "",
            "aspectRatio": false,
            "href": ""
          },
        imgcard1: 
          {
            "titleshort": "《全面战争模拟器》全兵种数据一览  兵种的属性都咋样",
            "title": "热血系列外传《热血少女》公布8分钟实机演示",
            "titleSize": 20,
            "titleLH": "40",
            "bold": 700,
            "backgroundColor": '#ffffff',
            "widthDescription": true,
            "description": "《热血少女》公布8分钟实机演示",
            "descriptionSize": "14px",
            "descriptionLH": "22px",
            "descriptionLines": 2,
            "reviewscore": -1,
            "padding": [
              "24px",
              "16px",
              "16px",
              "16px"
            ],
            "lines": 2,
            "isScale": false,
            "imageURL": "static/zhizhuxia.jpg",
            "width": "",
            "aspectRatio": false,
            "href": ""
          },
        "ly-imgcard0":{
          "titleshort":"《全面战争模拟器》全兵种数据一览  兵种的属性都咋样",
          "title":"热血系列外传《热血少女》公布8分钟实机演示",
          "titleSize":20,
          "titleLH":"40",
          "bold":700,
          "backgroundColor":"#ffffff",
          "widthDescription":true,
          "description":"《热血少女》公布8分钟实机演示",
          "descriptionSize":"14px",
          "descriptionLH":"22px",
          "descriptionLines":2,
          "reviewscore":-1,
          "padding":["24px","16px","16px","16px"],
          "lines":2,
          "isScale":true,
          "imageURL":"static/zhizhuxia.jpg",
          "width":"",
          "aspectRatio":false,
          "href":""
        }
      }
    }
  }
</script>

<style>

</style>