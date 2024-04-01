<script setup>
import { useUserStore, useCounterStore } from '@/stores'

import { useRoute, useRouter } from 'vue-router'
// 在 Vue3 CompositionAPI 中
// 1. 获取路由对象 router  useRouter
//    const router = useRouter()
// 2. 获取路由参数 route   useRoute
//    const route = useRoute()
const router = useRouter()
const route = useRoute()

const goList = () => {
  router.push('/list')
  console.log(router, route)
}

const userStore = useUserStore()
const counterStore = useCounterStore()
</script>

<template>
  <div>
    <router-view></router-view>

    <hr />
    <hr />
    <hr />

    我是App
    <el-button @click="$router.push('/home')">跳首页</el-button>
    <el-button @click="goList">跳列表页</el-button>
    <div>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </div>
    <hr />
    <test-demo></test-demo>
    <hr />

    <p>{{ userStore.token }}</p>
    <el-button @click="userStore.setToken('123456789123463435234453324')">
      登录
    </el-button>
    <el-button @click="userStore.removeToken()">登出</el-button>

    <hr />
    <p>{{ counterStore.counter }}</p>
    <el-button @click="counterStore.add(5)">数值+5</el-button>
  </div>
</template>

<style scoped></style>
@/stores/modules/user.js
