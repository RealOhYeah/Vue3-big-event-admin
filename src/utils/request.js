/* 封装axios用于发送请求 */
import axios from 'axios'
import { useUserStore } from '@/store'
import { ElMessage } from 'element-plus'
import router from '@/router'

const baseURL = 'http://big-event-vue-api-t.itheima.net'

// 创建一个新的axios实例
const instance = axios.create({
  // 1. 基础地址，超时时间
  baseURL,
  timeout: 10000
})

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 2. 携带token
    const useStore = useUserStore()
    if (useStore.token) {
      config.headers.Authorization = useStore.token
    }
    return config
  },
  // 对请求错误做些什么
  (err) => Promise.reject(err)
)

// 添加响应拦截器
instance.interceptors.response.use(
  // 对响应数据做点什么
  (res) => {
    //  4. 摘取核心响应数据
    if (res.data.code === 0) {
      return res
    }
    // 3. 处理业务失败
    //处理业务失败，给错误提示，抛出错误
    ElMessage.error(res.data.message || '服务异常')
    return Promise.reject(res.data)
  },
  (err) => {
    // 5. 处理401错误
    // 错误的特殊情况 => 401 权限不足 或 token过期 => 拦截到登录
    if (err.response?.status === 401) {
      router.push('/login')
    }

    ElMessage.error(err.response.data.message || '服务异常')
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
