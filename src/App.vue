<!--
 * @Author: Oh...Yeah!!! 614988210@qq.com
 * @Date: 2024-03-28 22:48:07
 * @LastEditors: Oh...Yeah!!! 614988210@qq.com
 * @LastEditTime: 2024-04-12 13:44:43
 * @FilePath: \Vue3-big-event-admin\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<template>
  <div>
    <el-config-provider :locale="zhCn">
      <!-- App.vue只需要留一个路由出口 router-view即可 -->
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<style scoped></style>
