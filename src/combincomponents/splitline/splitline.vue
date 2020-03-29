<template>
    <div class="clearfix title" :class="{'hidden_line': !hasBackLine}"><span> {{title}}</span></div>
</template>
<script>
  export default {
    name: 'ly-splitline',
    props: {
      title: {
        type: String,
        default: ''
      },
      hasBackLine: {
        type: Boolean,
        default: false
      },
      fontColor: {
        type: String,
        default: '#ed1991'
      },
      borderColor: {
        type: String,
        default: '#ee0fd6'
      }
    }
  }
</script>

<style lang="less" scoped="scoped">
  div.title {
    position: relative;
    color: #ed1991;
    font-size: 30px;
    font-weight: 300;
    position: relative;
    height: 42px;
    margin: 20px 0;
    span {
      border-bottom: 4px solid #ee0fd6;
      display: inline-block;
      padding: 0 15px 7px;
      margin-left: 35px;
      z-index: 999;
      position: relative;
    }
    &:before {
      position: absolute;
      height: 6px;
      width: 100%;
      background: #5e2ed0;
      bottom: 0;
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      border-radius: 3px;
      visibility: visible;
      content: "";
    }
  }
  
  .clearfix {
    zoom: 1;
   &:before, &:after {
      content: ".";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
  }
  div.hidden_line {
    &:before {
      visibility: hidden;
    }
  }
</style>