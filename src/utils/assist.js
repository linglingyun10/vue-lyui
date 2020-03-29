import Vue from 'vue';
const isServer = Vue.prototype.$isServer;
export const isColor = (value) => {
   const colorReg = /^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/;
    const rgbaReg = /^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/;
    const rgbReg = /^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;
    return colorReg.test(value) || rgbaReg.test(value) || rgbReg.test(value);
}

export const isIOS = !!(window.navigator && window.navigator.userAgent || '').match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

export const getScrollview = (el) => {
  let currentNode = el
  while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
    let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY
    if (overflowY === 'scroll' || overflowY === 'auto') {
      return currentNode
    }
    currentNode = currentNode.parentNode
  }
  return window
}

export const hasClass = (elem, cls) => {
  cls = cls || ''
  if (cls.replace(/\s/g, '').length === 0 || !elem) return false
  return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ')
}

export const addClass = (ele, cls) => {
  if(!hasClass(ele, cls)) {
    ele.className = ele.className === '' ? cls: ele.className + ' ' + cls
  }
}

export const removeClass = (ele, cls) => {
  if (hasClass(ele, cls)) {
    let newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' '
    while(newClass.indexOf(' ' + cls + ' ') >= 0) {
      newClass = newClass.replace(' ' + cls +' ', ' ')
    }
    ele.className = newClass.replace(/^\s+|\s+$/g, '')
  }
}

export const scrollTop = (el, from = 0, to, duration = 500, callback) => {
  if(!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame || 
      window.mozRequestAnimationFrame || 
      window.msRequestAnimationFrame || 
      function (callback) {
        return window.setTimeout(callback, 1000 / 60)
      }
    )
  }
  const difference = Math.abs(from - to)
  const step = Math.ceil(difference / duration * 50)
  function scroll(start, end, step) {
    if (start === end) {
      typeof callback === 'function' && callback()
      return
    }
    let d = (start + step > end) ? end: start + step
    if (start > end) {
      d = (start - step < end) ? end: start - step
    }
    if (el === window) {
      window.scrollTo(d, d)
    } else {
      el.scrollTop = d
    }
    window.requestAnimationFrame(() => scroll(d, end, step))
  }
  scroll(from, to, step)
}

export const findComponentUpward = (context, componentName, componentNames) => {
  if (typeof componentName === 'string') {
        componentNames = [componentName];
    } else {
        componentNames = componentName;
    }

    let parent = context.$parent;
    let name = parent.$options.name;
    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
}

export function oneOf (value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}

let cached
export const getScrollBarSize = (fresh) => {
  if (isServer) return 0
  if (fresh || cached === undefined) {
    const inner = document.createElement('div')
    inner.style.width = '100%'
    inner.style.height = '200px'
    const outer = document.createElement('div')
    const outerStyle = outer.style
    outerStyle.position = 'absolute'
    outerStyle.top = 0
    outerStyle.left = 0
    outerStyle.pointerEvents = 'none'
    outerStyle.visibility = 'hidden'
    outerStyle.width = '200px'
    outerStyle.height = '150px'
    outerStyle.overflow = 'hidden'
    
    outer.appendChild(inner)
    document.body.appendChild(outer)
    const widthContained = inner.offsetWidth
    outer.style.overflow = 'scroll'
    let widthScroll = inner.offsetWidth
    
    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth
    }
    document.body.removeChild(outer)
    cached = widthContained - widthScroll
  }
  return cached
}


export const pageScroll = (() => {
  const fn = function (e) {
    e.preventDefault()
    e.stopPropagation()
  }
  let islock = false
  return {
    lock (el) {
      if(islock) return
      islock = true
      (el || document).addEventListener('touchmove', fn)
    },
    unlock(el) {
      islock = false
      (el || document).removeEventListener('touchmove', fn)
    }
  }
})()
