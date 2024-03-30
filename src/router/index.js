import { createRouter, createWebHistory } from 'vue-router'

// createRouter 创建路由实例，===> new VueRouter()
// 1. history模式: createWebHistory()   http://xxx/user
// 2. hash模式: createWebHashHistory()  http://xxx/#/user

const router = createRouter({
  // vite 中的环境变量 import.meta.env.BASE_URL  就是 vite.config.js 中的 base 配置项
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})

export default router
