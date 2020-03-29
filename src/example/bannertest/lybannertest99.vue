<template>
		<div class="block" style="width: 1000px;margin: 0 auto;">
			<span class="demonstration">默认 Hover 指示器触发</span>
			<ly-banner height="285px" :autoplay='autoplay' indicator-position="none" arrow="always">
				<ly-banner-item bannerStyle="style1" gutter="16">
				  <template v-slot:banslot0>
							<ly-imgbanner :title="title" :link="link" :imgUrl="imgUrl" :width="width" bannerType="banner1"></ly-imgbanner>
				  </template>
						<template v-slot:banslot1>
							<ly-imgbanner :title="title" :link="link" :imgUrl="imgUrl" :width="width" bannerType="banner1"></ly-imgbanner>
						</template>
						<template v-slot:banslot2>
							<ly-imgbanner :title="title" :link="link" :imgUrl="imgUrl" :width="width" bannerType="banner1"></ly-imgbanner>
						</template>
						<template v-slot:banslot3>
							<ly-imgbanner :title="title" :link="link" :imgUrl="imgUrl" :width="width" bannerType="banner1"></ly-imgbanner>
						</template>
				</ly-banner-item>
			</ly-banner>
		</div>
</template>

<script>
	export default {
		data() {
			return {
				'autoplay': false,
				'title': '中山大学人机互联实验室教授翟振明做主题演讲',
				'link': 'https://www.thecss.cn/2016/index.html',
				'imgUrl': 'http://3gimg.qq.com/mig_market/css/24c2f85ae58846d5b6aab5a0acc2e1b7.jpg',
				'width': '100%',
				'split': true
			}
		},
		methods: {
		  changeCarouselStyle() {
		    if(this.styleType === 'style0') {
		      this.styleType = 'style1'
		    } else {
		      this.styleType = 'style0'
		    }
		  },
			setCarouselItem() {
				this.$refs.carousel.setActiveItem(1)
			}
		},
		mounted() {
			console.log(this.$refs.carousel)
		}
	}
</script>

<style>
	.block {
		padding: 30px 0;
		text-align: center;
		border-right: 1px solid #eff2f6;
		width: 100%;
		box-sizing: border-box;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.bg-purple {
		background: #d3dce6;
		width: 100%;
		height: 100%;
	}

	.ly-row {
		width: 100%;
		height: 150px;
	}

	.el-col {
		height: 150px;
	}

	.bg-blue {
		background: blue;
	}

	.bg-green {
		background: green;
	}

	.bg-red {
		background: red;
	}
</style>
<style lang="less" scoped="scoped">
	.dn-ly-row {
		height: 100%;
		.el-col {
			height: 100%;
		}
	}

	.dn-ly-harf {
		height: 50%;
	}
</style>
