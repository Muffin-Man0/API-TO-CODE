import QS from "qs";
import axios from "./apiConfig";

import baseURL from "./baseUrl";

const handleApiFn = (data: any) => {
  if (data.code === undefined) {
    return Promise.resolve(data);
  }

  if (data.code === 0) {
    return Promise.resolve(data);
  }

  return Promise.reject(data);
}



const handleReject = (err: any) => Promise.reject(err.status ? { msg: err.data.msg } : { msg: "网络异常" });


export async function GET(url: string, params?: any) {
  try {
    // 过滤空格
    const { data } = await axios.get(url, { params:params });
    return handleApiFn(data);
  } catch (error) {
    return handleReject(error);
  }
}

export async function POST(url: string, params: any) {
  try {
    // 过滤空格
    const { data } = await axios.post(url, QS.stringify(params));
    return handleApiFn(data);
  } catch (error) {
    return handleReject(error);
  }
}

export async function POSTBody(url: string, params: any) {
  try {
    const { data } = await axios({
      url,
      data: params,  // 过滤空格
      method: "post",
      headers: {
        "Content-Type": "application/json"
      }
    });
    return handleApiFn(data);
  } catch (error) {
    return handleReject(error);
  }
}

export async function FORM(url: string, params: any) {
  try {
    const formData = new window.FormData();
    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        formData.append(key, value);
      })
    }

    const { data } = await axios({
      url,
      data: formData,
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    return handleApiFn(data);
  } catch (error) {
    return handleReject(error);
  }
}

export async function UPLOADFILE(url: string, params: any) {
  try {
    const { data } = await axios({
      url,
      data: params,
      method: "post"
    });
    return handleApiFn(data);
  } catch (error) {
    return handleReject(error);
  }
}

export async function JSONP(url: string, params: any) {
  try {
    const data = await axios({
      adapter: axiosJsonp,
      url,
      params,
      method: "get"
    });
    return handleApiFn(data.data);
  } catch (err) {
    return handleReject(err);
  }
}

