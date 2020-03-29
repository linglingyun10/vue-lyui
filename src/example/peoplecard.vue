<template>
  <div class="dn-wrap">
    <ly-peocard :title="title" :imgUrl="imgUrl" :description="description"></ly-peocard>
    <!--<ly-peocard :title="title1" :imgUrl="imgUrl1" :showDesc="false" :titleP="titleP"></ly-peocard>-->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        'title': '于雪莉',
        'imgUrl': '/static/zhizhuxia.jpg',
        'description': 'Visa公司大中华区总裁',
        'title1': '奥芯微电子',
        'imgUrl1': '/static/zhizhuxia.jpg',
        'titleP': 'center',
        'description1': ''
      }
    }
  }
</script>

<style type="text/css">
  .dn-wrap {
    padding: 50px;
  }
</style>