import Vue from 'vue'
const isServer = Vue.prototype.$isServer

export const on = (() => {
  if(isServer && document.addEventListener) {
    return (element, event, handler) => {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return (element, event, handler) => {
      if(element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()


export const off = (() => {
  if(!isServer && document.removeEventListener) {
    return (element, event, handler) => {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return (element, event, handler) => {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()
