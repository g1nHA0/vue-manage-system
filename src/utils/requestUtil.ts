import router from "@/router/index";
import store from "@/store/index";
import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse,} from "axios";
import {ElMessage} from "element-plus";

const baseUrl = "http://127.0.0.1:8082/funfind/";
const service: AxiosInstance = axios.create({
  timeout: 5000,
  baseURL: baseUrl,
});
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      // 每次发送请求之前判断vuex中是否存在token
      // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
      // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
      const token = store.state.Authorization;
      token && (config.headers!.Authorization = token);
      return config;
    },
    (error: AxiosError) => {
      console.log(error);
      return Promise.reject();
    }
);

service.interceptors.response.use(
    (response: AxiosResponse) => {
      if (response.status === 200) {
        return response;
      } else {
        Promise.reject();
      }
    },
    (error: AxiosError) => {
      if (error.response!.status) {
        switch (error.response!.status) {
            // 401: 未登录
            // 未登录则跳转登录页面，并携带当前页面的路径
            // 在登录成功后返回当前页面，这一步需要在登录页操作。
          case 401:
            router.replace({
              path: "/login",
              query: {
                redirect: router.currentRoute.value.fullPath,
              },
            });
            break;
            // 403 token过期
            // 登录过期对用户进行提示
            // 清除本地token和清空vuex中token对象
            // 跳转登录页面
          case 403:
            ElMessage.success({
              message: "登录过期，请重新登录",
            });
            // 清除token
            localStorage.removeItem("token");
            store.commit("loginSuccess", null);
            // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
            setTimeout(() => {
              router.replace({
                path: "/login",
                query: {
                  redirect: router.currentRoute.value.fullPath,
                },
              });
            }, 1000);
            break;
            // 404请求不存在
          case 404:
            ElMessage.error("error");
            break;
            // 其他错误，直接抛出错误提示
          default:
            ElMessage.error("error");
        }
        return Promise.reject();
      }
    }
);
// 抛出对象信息
export default service;
