<!--
 * @Author: Oh...Yeah!!! 614988210@qq.com
 * @Date: 2024-04-01 10:36:22
 * @LastEditors: Oh...Yeah!!! 614988210@qq.com
 * @LastEditTime: 2024-04-10 18:26:58
 * @FilePath: \Vue3-big-event-admin\src\views\article\ArticleChannel.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
import { Delete, Edit } from '@element-plus/icons-vue'
import { useArticleStore } from '@/stores'
import { toRaw } from 'vue'
const handleClick = () => {
  console.log('click')
}

const articleStore = useArticleStore()

articleStore.getArticle()
const article = articleStore.article
console.log(article)
console.log('???')

const tableData = toRaw(article)

console.log(tableData)
</script>

<template>
  <page-container title="文章管理">
    <template #extra>
      <el-button>添加分类</el-button>
    </template>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="id" label="序号" width="100" />
      <el-table-column prop="cate_name" label="分类名称" width="385" />
      <el-table-column prop="cate_alias" label="分类别名" width="385" />
      <el-table-column fixed="right" label="操作" width="100">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick">
          </el-button>
          <div>
            <el-button type="primary" :icon="Edit" circle />
            <el-button type="danger" :icon="Delete" circle />
          </div>
        </template>
      </el-table-column>
    </el-table>
  </page-container>
</template>
