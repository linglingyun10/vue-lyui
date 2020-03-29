export default {
  name: 'LyCol',

  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    positionX: {
      type: Number,
      default: 0
    },
    positionY: {
      type: Number,
      default: 0
    },
    backgroundRepeat: {
      type: String,
      default: 'no-repeat'
    },
    hasBackground: {
      type: Boolean,
      default: false
    },
    coverImgUrl: {
      type: String,
      default: ''
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },

  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== 'LyRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    direction() {
      let parent = this.$parent;
       while (parent && parent.$options.componentName !== 'LyRow') {
        parent = parent.$parent;
      }
      return parent ? parent.direction : 'row';
    }
  },
  render(h) {
    let classList = [];
    let style = {};

    if (this.gutter && parseInt(this.gutter) !== 0) {
      if(this.direction === 'row' || this.direction === 'row-reverse') {
        style.paddingLeft = this.gutter / 2 + 'px';
        style.paddingRight = style.paddingLeft;
      } else {
        style.paddingTop = this.gutter / 2 + 'px';
        style.paddingBottom = style.paddingTop;
      }
    }
    if(this.hasBackground) {
      style.backgroundImage = 'url(' + this.coverImgUrl + ')'
      style.backgroundPositionX = this.positionX
      style.backgroundPositionY = this.positionY
      style.backgroundRepeat = this.backgroundRepeat
      style.backgroundSize = '100% 100%'
    }
//  console.log(classList)
    classList.push(`is-col-${this.direction}`);
    ['span', 'offset', 'pull', 'push'].forEach(prop => {
      if (this[prop] || this[prop] === 0) {
        classList.push(
          prop !== 'span'
            ? `el-col-${prop}-${this[prop]}`
            : `el-col-${this.direction}-${this[prop]}`
        );
      }
    });

    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`el-col-${size}-${this[size]}`);
      } else if (typeof this[size] === 'object') {
        let props = this[size];
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== 'span'
              ? `el-col-${size}-${prop}-${props[prop]}`
              : `el-col-${size}-${props[prop]}`
          );
        });
      }
    });

    return h(this.tag, {
      class: ['el-col', classList],
      style
    }, this.$slots.default);
  }
};
