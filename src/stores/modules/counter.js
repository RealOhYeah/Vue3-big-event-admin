import { defineStore } from 'pinia'
import { ref } from 'vue'

// 用户模块 token setToken removeToken
export const useCounterStore = defineStore('big-counter', () => {
  const counter = ref(100)
  const add = (num) => {
    counter.value += num
  }

  return {
    counter,
    add
  }
})
