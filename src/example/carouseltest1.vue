<template>
	<div class="">
		<div class="block">
			<span class="demonstration">默认 Hover 指示器触发</span>
			<ly-carousel height="416px" :autoplay='autoplay' indicator-position="outside" arrow="never">
				<ly-carousel-item>
					<ly-row class="ly-row dn-ly-row">
						<ly-col :span="6">
							<ly-row class="ly-row dn-ly-harf">
								<ly-col :span="24">
									<ly-imgbanner :title="title" :link="link" :imgUrl="imgUrl" :width="width"></ly-imgbanner>
								</ly-col>
							</ly-row>
							<ly-row class="ly-row dn-ly-harf">
								<ly-col :span="24">
									<ly-imgbanner :title="title" :link="link" :imgUrl="imgUrl" :width="width"></ly-imgbanner>
								</ly-col>
							</ly-row>
						</ly-col>
						<ly-col :span="9">
							<ly-imgbanner :title="title" :link="link" :imgUrl="imgUrl" :width="width"></ly-imgbanner>
						</ly-col>
						<ly-col :span="9">
							<ly-imgbanner :title="title" :link="link" :imgUrl="imgUrl" :width="width"></ly-imgbanner>
						</ly-col>
					</ly-row>
				</ly-carousel-item>
				<!-- <ly-carousel-item>
        <ly-row>
          <ly-col :span="12"><div class="grid-content bg-purple"></div></ly-col>
          <ly-col :span="12"><div class="grid-content bg-purple"></div></ly-col>
        </ly-row>
      </ly-carousel-item>
      <ly-carousel-item>
        <ly-row>
          <ly-col :span="12"><div class="grid-content bg-purple"></div></ly-col>
          <ly-col :span="12"><div class="grid-content bg-purple"></div></ly-col>
        </ly-row>
      </ly-carousel-item> -->
			</ly-carousel>
		</div>
		<div class="">
			<ly-button type="primary" @click="setCarouselItem">设置ActiveItem</ly-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				'autoplay': false,
				'title': '《莱莎的炼金工房》OP公开 神田沙也演唱主题歌曲',
				'link': 'https://www.tgbus.com/news/49282',
				'imgUrl': '/static/zhizhuxia.jpg',
				'width': '100%'
			}
		},
		methods: {
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
		padding: 30px;
		text-align: center;
		border-right: 1px solid #eff2f6;
		display: inline-block;
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
