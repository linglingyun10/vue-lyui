<template>
  <div v-transfer-dom :data-transfer="transfer">
    <transition :name="transitionNames[1]">
      <div :class="maskClasses" v-show="visible" v-if="showMask" @click="handleMask"></div>
    </transition>
    <div :class="wrapClasses" @click="handleWrapClick">
      <transition :name="transitionNames[0]" @after-leave="animationFinish">
        <div :class="contentClasses" ref="content" :style="contentStyles">
          <a :class="[prefixCls + '-close']" v-if="closable" @click="close">
            <slot name="close">
              <ly-icon type="ios-close"></ly-icon>
            </slot>
          </a>
          <div :class="[prefixCls + '-header']" @mousedown="handleMoveStart" v-if="showHead">
            <slot name="header">
              <div :class="[prefixCls + '-header-inner']">{{title}}</div>
            </slot>
          </div>
          <div :class="[prefixCls + '-body']">
            <slot></slot>
          </div>
          <div :class="[prefixCls + '-footer']" v-if="!footerHide">
            <slot name="footer">
              <ly-button type="hollow" size="large" @click.native="cancel">{{ cancelText }}</ly-button>
              <ly-button type="primary" size="large" :loading="buttonLoading" @click.native="ok">{{ okText }}</ly-button>
              <!--<i-button type="primary" size="large" :loading="buttonLoading" @click.native="ok">{{ localeOkText }}</i-button>-->
            </slot>
          </div>
        </div>
        
      </transition>
    </div>
  </div>
</template>

<script>
  import TransferDom from '../../../directives/transfer-dom'
//import Locale from '../../mixins/locale'
  import Emitter from '../../../mixins/emitter'
  import ScrollbarMixins from './mixins-scrollbar'
  import {on, off} from '../../../utils/dom'
  const prefixCls = 'ly-modal'
  export default {
    name: 'ly-modal',
    mixins: [Emitter, ScrollbarMixins],
    directives: {TransferDom},
    props: {
      value:{
        type: Boolean,
        default: false
      },
      closable: {
        type: Boolean,
        default: true
      },
      maskClosable: {
        type: Boolean,
        default: true
      },
      title: {
        type: String
      },
      width: {
        type: [Number, String],
        default: 520
      },
      okText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      loading: {
        type: Boolean,
        default: false
      },
      styles: {
        type: Object
      },
      className: {
        type: String
      },
      footerHide: {
        type: Boolean,
        default: false
      },
      scrollable: {
        type: Boolean,
        default: false
      },
      transitionNames: {
        type: Array,
        default () {
          return ['ease', 'fade']
        }
      },
      transfer: {
        type: Boolean,
        default () {
          return false
        }
      },
      fullscreen: {
        type: Boolean,
        default:false
      },
       mask: {
         type: Boolean,
         default:true
       },
       draggable: {
         type: Boolean,
         default: false
       }
    },
    data () {
      return {
        prefixCls: prefixCls,
        wrapShow: false,
        callback: null,
        action: '',
        showHead: true,
        buttonLoading: false,
        visible: this.value,
        dragData: {
          x: null,
          y: null,
          dragX: null,
          dragY: null,
          dragging: false,
        }
      }
    },
    computed: {
      wrapClasses () {
       return [
         `${prefixCls}-wrap`,
         {
           [`${prefixCls}-hidden`]: !this.wrapShow,
           [`${this.className}`]: !!this.className,
           [`${prefixCls}-no-mask`]: !this.showMask
         }
        ]
      },
      maskClasses () {
        return `${prefixCls}-mask`
      },
      classes () {
        return [
           `${prefixCls}`,
           {
             [`${prefixCls}-fullscreen`]: this.fullscreen,
             [`${prefixCls}-fullscreen-no-header`]: this.fullscreen && !this.showHead,
             [`${prefixCls}-fullscreen-no-footer`]: this.fullscreen && this.footerHide
           }
          ]
      },
      contentClasses () {
        return [
          `${prefixCls}-content`,
          {
            [`${prefixCls}-content-no-mask`]: !this.showMsk,
            [`${prefixCls}-content-drag`]: this.draggable,
            [`${prefixCls}-content-dragging`]: this.draggable && this.dragData.dragging
          }
        ]
      },
      mainStyles () {
        let style = {}
        const width = parseInt(this.width)
        const styleWidth = this.dragData.x !== null ? {top: 0}: {width: width <=100 ? `${width}%`: `${width}px`}
        const customStyle = this.styles ? this.styles: {}
        Object.assign(style, styleWidth, customStyle)
        return style
      },
      contentStyles () {
        let style = {}
        if (this.draggable) {
          if (this.dragData.x !== null) {
            style.left = `${this.dragData.x}px`
          }
          if (this.dragData.y !== null) {
            style.top = `${this.dragData.y}px`
          }
          const width = parseInt(this.width)
          const styleWidth = {width: width <= 100 ? `${width}%`: `${width}px`}
          Object.assign(style, styleWidth)
        }
        return style
      }
    },
    methods: {
      close () {
        this.visible = false
        this.$emit('input', false)
        this.$emit('on-cancel')
      },
      handleMask () {
        if (this.maskClosable && this.showMask) {
          this.close()
        }
      },
      handleWrapClick (event) {
        const className = event.target.getAttribute('class')
        if (className && className.indexOf(`${prefixCls}-wrap`) > -1) {
          this.handleMask()
        }
      },
      animationFinish () {
        this.$emit('on-hidden')
      },
      handleMoveStart (event) {
        if (!this.draggable) {
          return false
        }
        const $content = this.$refs.content
        const rect = $content.getBoundingClientRect()
        this.dragData.x = rect.x
        this.dragData.y = rect.y
        const distance = {
          x: event.clientX,
          y: event.clientY
        }
        this.dragData.dragX = distance.x
        this.dragData.dragY = distance.y
        this.dragData.dragging = true
       on(window, 'mousemove', this.handleMoveMove);
       on(window, 'mouseup', this.handleMoveEnd);
      },
      handleMoveMove (event) {
          if (!this.dragData.dragging) return false;

          const distance = {
              x: event.clientX,
              y: event.clientY
          };

          const diff_distance = {
              x: distance.x - this.dragData.dragX,
              y: distance.y - this.dragData.dragY
          };

          this.dragData.x += diff_distance.x;
          this.dragData.y += diff_distance.y;

          this.dragData.dragX = distance.x;
          this.dragData.dragY = distance.y;
      },
      handleMoveEnd () {
          this.dragData.dragging = false;
          off(window, 'mousemove', this.handleMoveMove);
          off(window, 'mouseup', this.handleMoveEnd);
      },
      cancel () {
        this.close()
      },
      ok () {
        if (this.loading) {
          this.buttonLoading = true
        } else {
          this.visible = false
          this.$emit('input', false)
        }
        this.$emit('on-ok')
      },
      EscClose (e) {
        if (this.visible && this.closable) {
          if(e.keyCode === 27) {
            this.close()
          }
        }
      },
      
    },
    mounted () {
      if (this.visible) {
        this.wrapShow = true
      }
      let showHead = true
      if (this.$slots.header === undefined && !this.title) {
        showHead = false
      }
      this.showHead = showHead
      document.addEventListener('keydown', this.EscClose)
    },
    beforeDestroy () {
      document.removeEventListener('keydown', this.EscClose)
    },
    watch: {
      value (val) {
        this.visible = val
      },
      visible (val) {
        if (val === false) {
          this.buttonLoading = false
          this.timer = setTimeout(() => {
            this.wrapShow = false
            this.removeScrollEffect()
          }, 300)
        } else {
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.wrapShow = true
          if(!this.scrollable) {
            this.addScrollEffect()
          }
        }
        this.broadcast('Table', 'on-visible-change', val);
        this.broadcast('Slider', 'on-visible-change', val);  // #2852
        this.$emit('on-visible-change', val);
      },
      loading(val) {
        if (!val) {
          this.buttonLoading = false
        }
      },
      scrollable (val) {
        if (!val) {
          this.addScrollEffect()
        } else {
          this.removeScrollEffect()
        }
      },
      title () {
        if (this.$slots.header === undefined) {
          this.showHead = !!val
        }
      }
    }
  }
</script>

<style>
</style>