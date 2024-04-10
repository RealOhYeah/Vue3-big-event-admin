/*
 * @Author: Oh...Yeah!!! 614988210@qq.com
 * @Date: 2024-04-10 17:51:09
 * @LastEditors: Oh...Yeah!!! 614988210@qq.com
 * @LastEditTime: 2024-04-10 22:42:25
 * @FilePath: \Vue3-big-event-admin\src\stores\modules\article.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { articleGetInfoService } from '@/api/article'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useArticleStore = defineStore('big-article', () => {
  const article = ref([])

  // 获取用户信息
  const getArticle = async () => {
    const res = await articleGetInfoService()
    article.value = res.data.data
  }
  return {
    article,
    getArticle
  }
})
