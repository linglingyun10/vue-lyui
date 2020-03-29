export default class Card {
  /**
   * 构造函数
   * @param {*} title            标题
   * @param {*} titleshort       短标题 用于图片提示
   * @param {*} titleSize        标题大小 默认16
   * @param {*} titleLH          标题行高 默认22
   * @param {*} bold             标题加粗 默认700
   * @param {*} backgroundColor  标题区域背景色 默认白色
   * @param {*} description      描述  默认false
   * @param {*} descriptionSize  描述字体  默认14
   * @param {*} descriptionLH    描述lineheight  22
   * @param {*} descriptionLines 描述行数  默认2
   * @param {*} reviewscore      分值  默认-1 没有分值
   * @param {*} padding          标题区域padding 默认[24, 16, 16, 16]
   * @param {*} lines            显示标题行数 默认2
   * @param {*} isScale          图片是否放大动画 默认true
   * @param {*} imageURL         图片路径
   * @param {*} width            宽度
   * @param {*} aspectRatio      图片比例 默认56.25%;
   * @param {*} href             Card链接地址
   */
  constructor({
    title = '《全面战争模拟器》全兵种数据一览  兵种的属性都咋样',
    titleshort = '《全面战争模拟器》全兵种数据一览  兵种的属性都咋样',
    titleSize = '16',
    titleLH = '22',
    bold = 700,
    backgroundColor = '#FFFFFF',
    widthDescription = false,
    description = '',
    descriptionSize = '14',
    descriptionLH = '22',
    descriptionLines = 2,
    reviewscore = -1,
    padding = ['24px', '16px', '16px', '16px'],
    lines = 2,
    isScale = true,
    hasRadius= false,
    imageURL = 'https://img2.tgbus.com/i/720_414//cms3.0/2019/0715/20190715114406-4025-74378.jpg',
    width = '',
    aspectRatio = false,
    href = ''}) {
    this.titleshort = titleshort;
    this.title = title;
    this.titleSize = titleSize;
    this.titleLH = titleLH;
    this.bold = bold;
    this.backgroundColor = backgroundColor;

    this.widthDescription = widthDescription;
    this.description = description;
    this.descriptionSize = descriptionSize;
    this.descriptionLH = descriptionLH;
    this.descriptionLines = descriptionLines;

    this.reviewscore = reviewscore;

    this.padding = padding;
    this.lines = lines;
    this.isScale = isScale;
    this.imageURL = imageURL;
    this.width = width;
    this.aspectRatio = aspectRatio;
    this.href = href;
  }
}
