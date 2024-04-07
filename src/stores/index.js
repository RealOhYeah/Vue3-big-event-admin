/*
 * @Author: Oh...Yeah!!! 614988210@qq.com
 * @Date: 2024-03-30 17:28:22
 * @LastEditors: Oh...Yeah!!! 614988210@qq.com
 * @LastEditTime: 2024-04-07 15:12:30
 * @FilePath: \Vue3-big-event-admin\src\stores\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia().use(piniaPluginPersistedstate)

export default pinia

// import { useUserStore } from './modules/user'
// export { useUserStore }

// import { useCounterStore } from './modules/counter'
// export { useCounterStore }

export * from './modules/user'
export * from './modules/counter'
