<template>
  <li v-if="islist" :class="[litype ? `ly-link-li--${litype}`: '']">
    <a
      :class="[
        'el-link',
        disabled && 'is-disabled',
        underline && !disabled && 'is-underline'
      ]"
      :href="disabled ? null : href"
      v-bind="$attrs"
      @click="handleClick"
      target="_blank"
    >
    {{content}}
      <!--<i :class="icon" v-if="icon"></i>
      <span v-if="$slots.default" class="el-link--inner">
        <slot></slot>
      </span>
      <template v-if="$slots.icon"><slot v-if="$slots.icon" name="icon"></slot></template>-->
    </a>
  </li>
  <a
    :class="[
      'el-link',
      atype ? `ly-link--${atype}` : '',
      disabled && 'is-disabled',
      underline && !disabled && 'is-underline'
    ]"
    :href="disabled ? null : href"
    v-bind="$attrs"
    @click="handleClick"
    target="_blank"
    v-else
    >
     <template v-if="atype === 'style2'">
      <span>{{content}}</span>
      <span class="icon-right"></span>
     </template>
     <template v-else>
      <i></i>
      {{content}}
     </template>
    </a>
</template>
<script>
export default {
  name: 'ly-link',
  props: {
    litype: {
      type: String,
      default: 'triangle'
    },
    atype: {
      type: String,
      default: 'style1'
    },
    underline: {
      type: Boolean,
      default: true
    },
    islist: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: '文字链接'
    },
    target:{
      type: String,
      default: '_blank',
      validate: (val) => {
        let arr = ['_blank', '_self', '_parent', '_search', '_top']
        return arr.findIndex(val) >= 0
      }
    },
    disabled: Boolean,
    href: String,
    icon: String
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        if (!this.href) {
          this.$emit('click', event);
        }
      }
    }
  }
};
</script>
<style lang="less" scoped="scoped">
  .ly-link-li--triangle {
    &:before {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 5px 0 5px 10px;
      border-color: transparent transparent transparent #55537f;
      display: inline-block;
      position: relative;
      bottom: 4px;
    }
    &:after {
      content: "";
      display: block;
      height: 0;
      line-height: 0;
      overflow: hidden;
      clear: both;
    }
    a {
      display: inline-block;
      width: 175px;
      word-wrap: break-word;
      padding: 12px 0 13px 8px;
      font-size: 14px;
      color: #333;
      overflow: hidden;
      margin-bottom: 10px;
    }
  }
  
  .ly-link-li--circle {
    &:before {
      display: inline-block;
      content: '';
      position: relative;
      top: 3px;
      width: 14px;
      height: 14px;
      background: url(../../../static/circle.png) 0 0 no-repeat;
    }
  }
  .ly-link--style1 {
    color: #000!important;
    padding: 1px 20px;
    float: right;
    background-color: #fff;
    border: 1px solid #e1e6f1;
    border-radius: 22px;
    font-size: 14px;
    line-height: 32px;
    font-weight: 400;
    text-align: center;
    i {
      margin-right: 4px;
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      &:before {
        content: "\e807";
      }
    }
  }
  .ly-link--style2 {
      display: block;
      float: right;
      width: 117px;
      height: 30px;
      line-height: 30px;
      border: 1px solid #C1C1C1;
      border-radius: 20px;
      font-size: 14px;
      color: #505050;
      text-align: center;
      &:before, &:after {
        content: "";
        display: block;
        height: 0;
        line-height: 0;
        overflow: hidden;
        clear: both;
      }
      span {
        vertical-align: top;
        display: inline-block;
        &.icon-right {
              background: url(../../../static/arrow0.png) 0 center no-repeat;
              width: 7px;
              height: 100%;
        }
      }
  }
</style>
