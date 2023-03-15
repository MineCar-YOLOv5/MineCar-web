<template>
	<div class="dataVisualize-box">
		<div class="card top-box">
			<div class="top-title">项目成果简介</div>
			<div class="top-content">
				<el-row :gutter="40">
					<el-col class="mb40" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
						<div class="item-left sle">
							<span class="left-title">识别准确率</span>
							<div class="img-box">
								<img src="./images/book-sum.png" alt="" />
							</div>
							<span class="left-number">96.5%</span>
						</div>
					</el-col>
					<el-col class="mb40" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
						<div class="item-center">
							<div class="gitee-traffic traffic-box">
								<div class="traffic-img">
									<img src="./images/add_person.png" alt="" />
								</div>
								<span class="item-value">5 人</span>
								<span class="traffic-name sle">团队成员</span>
							</div>
							<div class="gitHub-traffic traffic-box">
								<div class="traffic-img">
									<img src="./images/add_team.png" alt="" />
								</div>
								<span class="item-value">3389 张</span>
								<span class="traffic-name sle">数据集数量</span>
							</div>
							<div class="today-traffic traffic-box">
								<div class="traffic-img">
									<img src="./images/today.png" alt="" />
								</div>
								<span class="item-value"> 20 + 次</span>
								<span class="traffic-name sle">模型调优训练次数</span>
							</div>
							<div class="yesterday-traffic traffic-box">
								<div class="traffic-img">
									<img src="./images/book_sum.png" alt="" />
								</div>
								<span class="item-value">35 GB</span>
								<span class="traffic-name sle">数据总量</span>
							</div>
						</div>
					</el-col>
					<el-col class="mb40" :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
						<div class="item-right">
							<div class="echarts-title">数据类型占比</div>
							<div class="book-echarts">
								<Pie ref="pieRef" />
							</div>
						</div>
					</el-col>
				</el-row>
			</div>
		</div>
		<div class="card bottom-box">
			<div class="bottom-title">数据来源</div>
			<div class="curve-echarts" style="padding-top: 2rem">
				<Curve ref="curveRef" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="dataVisualize">
import { ref, onMounted } from "vue";
import Pie from "./components/pie.vue";
import Curve from "./components/curve.vue";

// const tabActive = ref(1);
const pieRef = ref();
const curveRef = ref();

onMounted(() => {
	pieRef.value.initChart(pieData);
	curveRef.value.initChart(curveData);
});

const pieData = [
	{ value: 5000, name: "图片数据量" },
	{ value: 5000, name: "视频数据量" }
];
const curveData = [
	{ value: 30, spotName: "掘金" },
	{ value: 90, spotName: "CSDN" },
	{ value: 10, spotName: "Gitee" },
	{ value: 70, spotName: "GitHub" },
	{ value: 20, spotName: "知乎" },
	{ value: 60, spotName: "MyBlog" },
	{ value: 55, spotName: "简书" },
	{ value: 80, spotName: "StackOverFlow" },
	{ value: 50, spotName: "博客园" }
];
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
