/**
 * vue-axios http配置
 * Created by 卢海云 on 2017/11/24.
 */
// import Vue from 'vue'
import axios from 'axios'
var qs = require('qs')
export const API_ROOT = '/api'
const instance = axios.create({
  baseURL: API_ROOT,
  timeout: 50000,
  headers: {
    'content-type': 'application/json'
  },
  retry: 4,
  retryDelay: 2000,
  withCredentials: true
});
//设置全局的请求次数，请求的间隙
//axios.defaults.retry = 4;
//axios.defaults.retryDelay = 2000;
//
//// 跨域携带cookie
//axios.defaults.withCredentials = true

// http request拦截器
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  res => {
    if (res.status === 200 && !res.errors) {
      return res;
    } else {
      console.error('请求异常，错误码： ' + res.errors, 15);
      return Promise.reject(res);
    }
  },
  error => {
    console.log('-----------------------------');
    console.log('网络异常： ' + error, 15);
    console.log('请求路径：' + error.config.url);
    console.log('请求参数' + JSON.parse(error.config.data).query);
    console.log('-----------------------------');

    // throw error
    if (error.response.status) {
      switch (error.response.status) {
        case 401:
          break;
        case 403:
          break;
        case 404:
          break;
        default:
      }
      return Promise.reject(error.response);
    }
  }
);
export default axios

/**
 * fetch请求
 * @param url
 * @param params 参数默认为空对象
 * @returns {Promise}
 */
export function fetch (url, params = {}) {
  return new Promise((resolve, reject) => {
    instance.get(url + '?' + params)
    .then(response => {
        resolve(response ? response.data : undefined)
    }).catch(err => {
      console.log('========error===', err)
      reject(err)
    })
  })
}

/**
 * fetch请求
 * @param url
 * @param params 参数默认为空对象
 * @returns {Promise}
 */
export function fetch2 (url, params = {}) {
  return new Promise((resolve, reject) => {
    instance.get(url + '?' + qs.stringify(dataWithsign), {timeout: 1000*60})
    .then(response => {
          resolve(response ? response.data : undefined)
    }).catch(err => {
      console.log('========error===', err)
      reject(err)
    })
  })
}

/**
 * post请求
 * @param url
 * @param data 默认为空对象
 * @returns { Pormise }
 */

/* eslint no-undef: "error" */
export function sendPost (url, data = {}) {
  return new Promise((resolve, reject) => {
      instance.post(url, data, {
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(response => {
        resolve(response)
      }).catch(err => {
        reject(err)
      })
  })
}
