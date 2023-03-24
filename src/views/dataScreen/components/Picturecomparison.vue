<template>
	<div class="contrast">
		<div :style="{ width: imgWidth + 'px' }" class="container">
			<div :style="{ width: beforWidth + '%' }" class="img-box img-before">
				<img :src="img[1]" alt="" />
			</div>
			<div class="img-box img-after">
				<img :src="img[2]" alt="" />
			</div>
			<input v-model="beforWidth" type="range" min="0" max="100" class="slider" />
			<div :style="{ left: beforWidth + '%' }" class="btn" />
		</div>
	</div>
</template>
<!--<script lang="ts" name="Picturecomparison">-->
<!--import { defineComponent, onMounted } from "vue";-->
<!--export default defineComponent({-->
<!--	name: "Picturecomparison",-->
<!--	setup() {-->
<!--		let imgWidth: number;-->
<!--		let imgHeight: number;-->
<!--		// let beforWidth: number;-->
<!--		// let img: string[];-->
<!--		onMounted(() => {-->
<!--			if (imgWidth > 1400 || imgHeight > 800) {-->
<!--				if (imgWidth / 1400 > imgHeight / 800) {-->
<!--					imgWidth = 1400;-->
<!--				} else {-->
<!--					imgWidth = (imgWidth * 800) / imgHeight;-->
<!--				}-->
<!--			}-->
<!--		});-->
<!--		return {-->
<!--			img: [-->
<!--				"https://img2.baidu.com/it/u=1361506290,4036378790&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",-->
<!--				"https://img0.baidu.com/it/u=1587760030,1664774370&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500"-->
<!--			],-->
<!--			imgWidth: 2154,-->
<!--			imgHeight: 2154,-->
<!--			beforWidth: 50-->
<!--		};-->
<!--	}-->
<!--});-->
<!--// import { onMounted } from "vue";-->
<!--//-->
<!--// let imgWidth = 2154;-->
<!--// let imgHeight: 2154;-->
<!--// let beforWidth: 50;-->
<!--// let img: string[];-->
<!--// img = [-->
<!--// 	"https://img2.baidu.com/it/u=1361506290,4036378790&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",-->
<!--// 	"https://img0.baidu.com/it/u=1587760030,1664774370&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500"-->
<!--// ];-->
<!--// on-->
<!--// onMounted(() => {-->
<!--// 	if (imgWidth > 1400 || imgHeight > 800) {-->
<!--// 		if (imgWidth / 1400 > imgHeight / 800) {-->
<!--// 			imgWidth = 1400;-->
<!--// 		} else {-->
<!--// 			imgWidth = (imgWidth * 800) / imgHeight;-->
<!--// 		}-->
<!--// 	}-->
<!--// });-->
<!--</script>-->
<script lang="ts">
// import UploadUserFile from "element-plus";
export default {
	name: "Picturecomparison",
	// eslint-disable-next-line vue/require-prop-types
	props: ["img"],
	data() {
		return {
			imgWidth: 2154,
			imgHeight: 2154,
			beforWidth: 50,
			// img: [
			// 	"https://img2.baidu.com/it/u=1361506290,4036378790&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
			// 	"https://img0.baidu.com/it/u=1587760030,1664774370&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500"
			// ],
			fileList: []
		};
	},
	created() {
		// 容器最大宽高：1400*800，图片宽高和这个做对比
		// 如果超出，做等比缩放（以比例大的缩放）
		if (this.imgWidth > 1400 || this.imgHeight > 800) {
			if (this.imgWidth / 1400 > this.imgHeight / 800) {
				this.imgWidth = 1400;
			} else {
				this.imgWidth = (this.imgWidth * 800) / this.imgHeight;
			}
		}
	}
};
</script>

<style scoped>
.contrast {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background: rgb(0 0 0 / 50%);
}
.container {
	position: relative;

	/* 容器最大宽高*! */
	max-width: 1400px;
	height: 100%;
	max-height: 800px;
}
.img-box {
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
img {
	/* 图片的高最大是容器的 100%，这样保证从左侧平铺 */
	max-height: 100%;
}
.img-before {
	z-index: 1;
}
.slider {
	position: absolute;
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	margin: 0;
	background-color: transparent;
	outline: none;
	transition: all 0.2s;
	appearance: none;
}
::-webkit-slider-thumb {
	z-index: 5;
	width: 4px;
	height: 800px;
	cursor: pointer;
	background: #ffffff;
	border-radius: 4px; /* 外观设置为圆角 */
	box-shadow: 0 0.125em 0.125em #3b4547; /* 添加底部阴影 */
	appearance: none;
}
.slider-d {
	position: absolute;
	top: 0;
	width: 3px;
	height: 100%;
	background-color: #ffffff;
	border-radius: 3px;
}
.btn {
	position: absolute;
	top: 50%;
	z-index: 2;
}
.btn ::before {
	position: absolute;
	left: -15px;
	display: inline-block;
	padding: 5px;
	content: "";
	border: solid #ffffff;
	border-width: 0 2px 2px 0;
	transform: rotate(135deg);
}
.btn ::after {
	position: absolute;
	left: 3px;
	display: inline-block;
	padding: 5px;
	content: "";
	border: solid #ffffff;
	border-width: 0 2px 2px 0;
	transform: rotate(-45deg);
}
</style>
