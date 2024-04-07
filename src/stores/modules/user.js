/*
 * @Author: Oh...Yeah!!! 614988210@qq.com
 * @Date: 2024-03-30 16:59:24
 * @LastEditors: Oh...Yeah!!! 614988210@qq.com
 * @LastEditTime: 2024-04-07 19:43:51
 * @FilePath: \Vue3-big-event-admin\src\stores\modules\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { userGetInfoService } from '@/api/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 用户模块 token setToken removeToken
export const useUserStore = defineStore(
  'big-user',
  () => {
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }

    // 获取用户信息
    const user = ref({})
    const getUser = async () => {
      const res = await userGetInfoService()
      user.value = res.data.data
    }

    return {
      token,
      setToken,
      removeToken,
      user,
      getUser
    }
  },
  {
    persist: true
  }
)
