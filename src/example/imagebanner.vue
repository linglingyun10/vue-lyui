<template>
  <div class="">
  	<ly-imgbanner :title="title" :link="link" :imgUrl="imgUrl" height="220px"></ly-imgbanner>
  	<ly-imgbanner :title="title" :link="link" :imgUrl="imgUrl" bannerType="banner1"></ly-imgbanner>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        bannerType: 'banner0',
        title: '《莱莎的炼金工房》OP公开 神田沙也演唱主题歌曲',
        link: 'https://www.tgbus.com/news/49282',
        imgUrl: '/static/zhizhuxia.jpg',
      }
    }
  }
</script>
<style>
</style>