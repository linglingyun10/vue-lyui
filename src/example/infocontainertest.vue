<template>
  <div class="">
  	<ly-infocontainer>
  	  <ly-infoitem :link="link" :title="title" :imgUrl="imgUrl" :content="content"></ly-infoitem>
  	</ly-infocontainer>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        imgUrl:'static/zhizhuxia.jpg',
        link: 'http://www.donews.com/news/detail/4/3026150.html',
        title: '第四届中国（广东）国际“互联网+”博览会圆满落幕',
        content: '国内互联网+领域的年度盛会——第四届中国（广东）国际“互联网+”博览会（以下简称：“互联网+”博览会）于10月27日在潭洲国际会展中心圆满落下帷幕。'
      }
    }
  }
</script>

<style>
</style>