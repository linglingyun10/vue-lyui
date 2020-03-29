<template>
  <div class="">
  	<ly-row type="flex">
      <ly-col :span="24" :coverImgUrl="imgUrl" :hasBackground="true">
        
      </ly-col>
    </ly-row>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        imgUrl: 'http://192.168.60.97:8000/wangjie.png'
      }
    }
  }
</script>

<style>
</style>