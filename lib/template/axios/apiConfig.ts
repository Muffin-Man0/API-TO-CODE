import type { AxiosRequestConfig, AxiosResponse } from 'axios';

import axios from 'axios';
import axiosJsonp from "axios-jsonp";
// import store from "../store/index";
import baseURL from "./baseUrl";

// 创建axios实例
const instance = axios.create({ timeout: 60 * 1000 });

// 设置post请求头
instance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
// 设置Get  请求投
instance.defaults.headers.get["Content-Type"] = "application/json;charset=UTF-8";

// 请求拦截器
instance.interceptors.request.use(
  (oldConfig: AxiosRequestConfig) => {
    const newConfig = {
      ...oldConfig,
      params: oldConfig.params || {},
      adapter: oldConfig.adapter === axiosJsonp ? axiosJsonp : oldConfig.adapter
    };
    // newConfig.headers.sessionId = store.state.sessionId;
    return newConfig;
  },
  error => new Promise(error)
);

// 响应拦截器
instance.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.data.flag) {
      switch (res.data.flag) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          return Promise.reject({
            flag: 4010,
            msg: "登陆超时!"
          });
        default:
          return Promise.resolve(res);
      }
    } else {
      return Promise.reject(res);
    }
  },
  // 服务器状态码不是200的情况
  error => {
    // console.error(router)
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
        
          break;
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          break;
        // 404请求不存在
        case 404:
          break;
        // 其他错误，直接抛出错误提示
        default:
      }
      return Promise.reject(error.response);
    }
  }
);


export default instance;