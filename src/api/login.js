import service from "@/assets/requests";

export function LoginApi(data) {
	return service({
		url: "/login/",
		method: "get",
		params: data
	});
}
