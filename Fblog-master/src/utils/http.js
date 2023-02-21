import Vue from 'vue'
import axios from 'axios'

// axios请求地址
const Url = 'https://www.fsou.cc/article/v1'

axios.defaults.baseURL = Url
Vue.prototype.$http = axios

axios.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${window.sessionStorage.getItem('token')}`
  return config
})

Vue.prototype.$http = axios

export { Url }
