<template>
	<div class="login-container flx-center">
		<div class="login-box">
			<SwitchDark class="dark" />
			<div class="login-left">
				<img src="@/assets/images/login_left2.png" alt="login" />
			</div>
			<div class="login-form">
				<div class="login-logo">
					<img class="login-icon" src="@/assets/images/logo1.png" alt="" />
					<h2 class="logo-text">矿山环形车辆智能检测系统</h2>
				</div>
				<LoginForm />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="login">
import SwitchDark from "@/components/SwitchDark/index.vue";
import LoginForm from "./components/LoginForm.vue";
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
