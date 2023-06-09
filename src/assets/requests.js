import axios from "axios";
// 修改请求地址(二选一)
// 本地
// const VUE_APP_BASE_API = "http://localhost:8000";
const VUE_APP_BASE_API = import.meta.env.VITE_USE_ADDRESS;
// 服务器地址
// const VUE_APP_BASE_API = "http://120.26.1.222:8000";

import { ElMessage } from "element-plus";
// create an axios instance
const service = axios.create({
	baseURL: VUE_APP_BASE_API, // url = base url + request url
	// withCredentials: true, // send cookies when cross-domain requests
	timeout: 50000 // request timeout
});
// request interceptor
service.interceptors.request.use(
	config => {
		return config;
	},
	error => {
		console.log(error); // for debug
		return Promise.reject(error);
	}
);

service.interceptors.response.use(
	response => {
		const res = response.data;
		if (response.headers["content-type"] === "application/octet-stream;charset=utf-8") {
			return response.data;
		}
		// if the custom code is not 200, it is judged as an error.
		if (response.status === 200) {
			if (res && res.status === 1) {
				return res.data;
			} else {
				return res;
			}
		} else if (res.status !== 200) {
			ElMessage({
				message: res.message,
				type: "error"
			});
			return Promise.reject(new Error(res.message || "Error"));
		} else if (res.status === 200) {
			return res;
		}
	},
	error => {
		console.log("err" + error); // for debug
		ElMessage({
			message: error.message,
			type: "error"
		});
		return Promise.reject(error);
	}
);

export default service;
