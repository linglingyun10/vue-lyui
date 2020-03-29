<template>
  <div >
    <ly-row type="flex">
    <!--<ly-col :span="24"><div class="grid-content bg-purple-dark"></div></ly-col>-->
      <ly-col :span="8"><div class="grid-content bg-purple-dark"></div></ly-col>
      <ly-col :span="12"><div class="grid-content bg-purple-dark"></div></ly-col>
    </ly-row>
    <div style="height: 400px;width: 600px;background: green;">
      <ly-row type="flex" direction="column">
      <ly-col :span="8"><div class="grid-content bg-purple-dark"></div></ly-col>
      <ly-col :span="12"><div class="grid-content bg-purple-dark"></div></ly-col>
      </ly-row>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped="scoped">
/*@import '../assets/less/components/row.scss'*/
/*@import '../assets/less/components/col.scss'*/
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    min-width: 100px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>