import store from "@/store.js";
import {getStorage} from '@/assets/js/utils.js';
import util from '@/assets/js/utils.js'

//拦截器
const interceptors = {
  request({ url, data, ...otherConfig }) {
		const {baseURL} = store.state.REQUESTURL;
    return {
      url: url.indexOf("http") === -1 ? baseURL + url : url,
      data: { ...data},
      ...otherConfig
    };
  },

  async response(res, config) {
    if (res.code === 0 || res.status === 0) {
      return Promise.resolve(res);
    } else if(res.code === 11001 && res.msg === "未授权"){
			// util.Toast(res.msg)
			// uni.clearStorage()
			// util.jump('reLaunch','/pages/login/index')
		} else {
      return Promise.reject(res.msg);
    }
  }
};

async function request(params) {
  try {
    const config = interceptors.request(params);
    const data = await new Promise((resolve, reject) => {
      uni
        .request(config)
        .then(res =>{
						res.length === 2 
							? resolve(res[1].data)
							: reject(res[0].errMsg);
					}
				)
        .catch(err => reject(err));
    });
	
    const res = await  interceptors.response(data, config);
    return Promise.resolve(res);
  } catch (error) {
    let err;
    if (typeof error === "string") {
      err = error;
    } else if (typeof error === "object" && error.msg) {
      err = error.msg;
    } else {
      console.error(error);
      err = "网络异常";
    }

    return Promise.reject(err);
  }
}

export function GET(url, data) {
  const params = {
    method: "GET",
		header:{
			"sessionId": store.state.USER ? store.state.USER.sessionId : ''
		},
    url,
    data
  };
  return request(params);
}

export async function POST(url, data,...option) {
  const params = {
    method: "POST",
    header: { 
			"content-type": option.length ? option[0] : 'application/x-www-form-urlencoded',
			"sessionId": store.state.USER ? store.state.USER.sessionId : ''
		},
    url,
    data
  };
  return request(params);
}

