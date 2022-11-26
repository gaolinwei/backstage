import axios from 'axios'

const baseURL = `http://localhost:3000`

export const instance = axios.create({
  baseURL
})

instance.interceptors.request.use(config => {
  return config
})

instance.interceptors.request.use(response => {
  return response
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
})