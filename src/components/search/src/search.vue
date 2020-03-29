<template>
  <div>
    <div class="ly-search">
      <div class="ly-search-input">
        <form action="#" class="search-input" @submit.prevent="submit">
          <i class="search-icon"></i>
          <ly-search-input
            type="search"
            :placeholder="placeholder"
            v-model="currentValue"
            :readonly="fullpage"
            @click.native="open"
            ref="search"
            ></ly-search-input>
        </form>
        <a href="javascript:;" class="cancel-text" v-show="currentValue !== ''"
          @click="close(false)">{{cancelText}}</a>
      </div>
    </div>
    <template v-if="fullpage">
      <div class="ly-search ly-search-fly" :class="show? 'ly-search-show': ''" :style="{top: top}">
        <div class="ly-search-input">
          <form action="#" class="search-input" @submit.prevent="submit">
            <i class="search-icon"></i>
            <ly-search-input 
              type="search" 
              :placeholder="placeholder"
              v-model="currentValue"
              ref="search"
             ></ly-search-input>
          </form>
          <a href="javascript:;" class="cancel-text" @click="close(false)">{{cancelText}}</a>
        </div>
        <div class="ly-search-list" :style="{paddingBottom: top}">
          <p class="ly-search-list-item" v-for="item, key in result" @click="clickHandle(item)" :key="key">
            {{item.label || item}}
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import {addClass, removeClass, getScrollview, isIOS} from '../../../utils/assist'
  import Input from '../../input/src/index.vue'
  export default {
    name: 'ly-search',
    extends: Input,
    components: {
      'ly-search-input': Input
    },
    data () {
      return {
        show: false,
        currentValue: this.value
      }
    },
    props: {
      placeholder: {
        type: String,
        default: '搜索'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      result: {
        type: Array,
        default () {
          return []
        }
      },
      itemClick: {
        type: Function
      },
      value: {
        type: String,
        default: ''
      },
      fullpage: {
        type: Boolean,
        default: false
      },
      top: {
        validator(value) {
          return /^-?(\.|\d+\.)?\d+(px|rem)$/.test(value)
        },
        default: '-1px'
      },
      onSubmit: {
        type: Function
      },
      onCancel: {
        type: Function
      }
    },
    watch: {
      currentValue(val) {
        this.$emit('input', val)
      },
      val (val) {
        this.currentValue = val
      },
      show(val) {
        if (val) {
          this.$refs.search.setFocus()
          if (isIOS) addClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug')
        } else {
          this.$refs.search.setBlur()
          if(isIOS) removeClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug')
        }
      }
    },
    methods: {
      open () {
        if (this.fullpage) {
          this.show = true
          this.$refs.search.setFocus()
        }
      },
      close(internalClose) {
        this.show = false
        if (!internalClose) {
          this.onCancel && this.onCancel()
        }
      },
      submit () {
        this.$refs.search.setBlur()
        this.onSubmit && this.onSubmit(this.currentValue)
        this.close(true)
      },
      clickHandler(item) {
        this.currentValue = item.label? item.label: item
        this.itemClick && this.itemClick(item)
        this.close(true)
      }
    },
    destroyed() {
      isIOS && removeClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug')
    },
    mounted () {
      this.scrollView = getScrollview(this.$el)
    }
  }
</script>

<style lang="less">
  @import "../../../assets/less/components/search.less";
</style>