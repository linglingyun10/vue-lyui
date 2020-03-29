export default {
  name: 'LyRow',

  componentName: 'LyRow',

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: [Number, String],
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    },
    direction: {
      type: String,
      default: 'row' // row-reverse, column, column-reverse
    }
  },

  computed: {
    style() {
      const ret = {};

      if (this.gutter && parseInt(this.gutter) !== 0) {
        if(this.direction === 'row' || this.direction === 'row-reverse') {
          ret.marginLeft = `-${this.gutter / 2}px`;
          ret.marginRight = ret.marginLeft;
        } else {
          ret.marginTop = `-${this.gutter / 2}px`;
          ret.marginBottom = ret.marginTop;
        }
      }

      return ret;
    }
  },

  render(h) {
    return h(this.tag, {
      class: [
        'el-row',
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align !== 'top' ? `is-align-${this.align}` : '',
        this.direction !== 'row' ? `is-direction-${this.direction}`: '',
        { 'el-row--flex': this.type === 'flex' }
      ],
      style: this.style
    }, this.$slots.default);
  }
};
