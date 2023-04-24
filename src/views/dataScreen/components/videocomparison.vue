<template>
	<div class="contrast">
		<div :style="{ width: imgWidth + 'px' }" class="container">
			<div class="img-box img-after">
				<img :src="imgurl" alt="" style="width: 120%" />
			</div>
		</div>
	</div>
</template>

<script>
import { ElMessage } from "element-plus";

export default {
	name: "Videocomparison",
	data() {
		return {
			imgWidth: 2154,
			imgHeight: 2154,
			beforWidth: 50,
			// path: "ws://http://127.0.0.0:8000/ws/video/",
			path: "",
			socket: "",
			imgurl: "",
			timer: null
		};
	},
	created() {
		// console.log(import.meta.env.VITE_Detection);
		this.path = import.meta.env.VITE_Detection;
		console.log(this.path);
		// 容器最大宽高：1400*800，图片宽高和这个做对比
		// 如果超出，做等比缩放（以比例大的缩放）
		if (this.imgWidth > 1400 || this.imgHeight > 800) {
			if (this.imgWidth / 1400 > this.imgHeight / 800) {
				this.imgWidth = 1400;
			} else {
				this.imgWidth = (this.imgWidth * 800) / this.imgHeight;
			}
		}
	},
	mounted() {
		// 初始化
		this.init();
	},
	unmounted() {
		this.close();
	},
	methods: {
		init: function () {
			if (typeof WebSocket === "undefined") {
				alert("您的浏览器不支持socket");
			} else {
				// 实例化socket
				this.socket = new WebSocket(this.path);
				console.log(1111);
				// 监听socket连接
				this.socket.onopen = this.open;
				// 监听socket错误信息
				this.socket.onerror = this.error;
				// 监听socket消息
				this.socket.onmessage = this.getMessage;
				// 关闭socket
				this.socket.onclose = this.close;
			}
		},
		open: function () {
			ElMessage({
				message: "websocket连接成功",
				type: "success"
			});
			this.timer = setInterval(() => {
				this.send("start");
			}, 1000);
			this.timer;
		},
		error: function () {
			ElMessage({
				message: "websocket连接错误",
				type: "error"
			});
		},
		getMessage: function (msg) {
			this.imgurl = "data:image/png;base64," + msg.data;
		},
		send: function (params) {
			this.socket.send(params);
		},
		async close() {
			ElMessage({
				message: "websocket已关闭",
				type: "success"
			});
			this.timer && clearTimeout(this.timer);
			this.timer = null;
			await this.send("stop");
		}
	}
	// onUnmounted(){
	// 	this.
	// }
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
</style>
