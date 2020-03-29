import Vue from 'vue'
import Modal from './modal.vue'
const prefixCls = 'ivu-modal-confirm'
import Button from '../../button/button.vue'
Modal.newInstance = properties => {
  const _props = properties || {}
  const Instance = new Vue({
    mixins: [],
    data: Object.assign({}, _props, {
      visible: false,
      width: 416,
      title: '',
      body: '',
      iconType: '',
      iconName: '',
      okText: '确定',
      cancelText: '取消',
      showCancel: false,
      loading: false,
      buttonLoading: false,
      scrollable: false,
      closable: false
    }),
    render (h) {
      let footerVNodes = []
      if (this.showCancel) {
        footerVNodes.push(h(Button, {
          props: {
            type: 'text',
            size: 'large'
          },
          on: {
            click: this.cancel
          }
        }))
       }
      footerVNodes.push(h(Button, {
        props: {
          type: 'primary',
          size: 'large',
          loading: this.buttonLoading
        },
        on: {
          click: this.ok
        }
      }))
      let body_render
      if(this.render) {
        body_render = h('div', {
          attrs: {
            class: `${prefixCls}-body ${prefixCls}-body-render`
          }
        }, [this.render(h)])
      } else {
        body_render = h('div', {
          attrs: {
            class: `${prefixCls}-body`
          }
        }, [
          h('div', {
            domProps: {innerHTML: this.body}
          })
        ])
      }
      // when render with no title, hide head
      let head_render
      if (this.title) {
        head_render = h('div', {
          attrs: {
            class: `${prefixCls}-head`
          }
        }, [
          h('div', {
            class: this.iconTypeCls
          }, [
            h
          ])
        ])
      }
    }
  })
}
