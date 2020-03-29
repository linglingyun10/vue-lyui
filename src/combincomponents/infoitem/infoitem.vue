<script>
export default {
  name: 'ly-infoitem',
  props: {
    link: '',
    title: '',
    imgUrl: '',
    content: ''
  },
  render(h) {
    const {link, title, imgUrl, content} = this
    return (
      <li>
    <a href={link} target="_blank"><img src={imgUrl} /></a>
    <h2><a href={link} target="_blank">{title}</a></h2>
    <p>{content}</p>
    </li>
    )
  }
}
</script>
<style lang="scss" scoped="scoped">
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1; /*IE/7/6*/
}
.list_news {
  margin: 0 0 50px;
  overflow: hidden;
}
.list_news li {
  margin: 20px 0 0;
  float: left;
  display: inline;
  font-size: 12px;
  line-height: 22px;
  border-bottom: 1px dashed #ccc;
  padding: 0 40px 20px 0;
}
.list_news li img {
  float: left;
  margin-right: 18px;
  display: inline;
  width: 210px;
  height: 120px;
}
.list_news li h2 {
  overflow: hidden;
  margin-bottom: 5px;
  line-height: 26px;
  font-weight: 500;
}
.list_news li h2 a {
  color: #000;
}

.list_news li h2 a:hover {
  color: #000;
  text-decoration: underline;
}
.list_news li p {
  height: 66px;
  overflow: hidden;
  color: #666;
}
</style>
