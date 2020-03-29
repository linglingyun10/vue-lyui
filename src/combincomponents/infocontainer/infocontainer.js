export default {
  name: 'ly-infocontainer',
  componentName: 'LyInfocontainer',
  props: {
    tag: {
      type: String,
      default: 'ul'
    }
  },
  render(h) {
    return h(this.tag, {
      class: ['clearfix list_news']
    }, this.$slots.default)
  }
}
