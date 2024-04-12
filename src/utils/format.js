/*
 * @Author: Oh...Yeah!!! 614988210@qq.com
 * @Date: 2024-04-12 16:46:41
 * @LastEditors: Oh...Yeah!!! 614988210@qq.com
 * @LastEditTime: 2024-04-12 16:46:48
 * @FilePath: \Vue3-big-event-admin\src\utils\format.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { dayjs } from 'element-plus'

export const formatTime = (time) => dayjs(time).format('YYYY年MM月DD日')
