/*
 * @Author: Oh...Yeah!!! 614988210@qq.com
 * @Date: 2024-04-09 16:13:55
 * @LastEditors: Oh...Yeah!!! 614988210@qq.com
 * @LastEditTime: 2024-04-14 10:43:01
 * @FilePath: \Vue3-big-event-admin\src\api\article.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

export const articleGetInfoService = () => request.get('/my/cate/list')

// 分类：获取文章分类
export const artGetChannelsService = () => request.get('/my/cate/list')

// 添加文章分类
export const artAddChannelService = (data) => request.post('/my/cate/add', data)

// 编辑文章分类
export const artEditChannelService = (data) =>
  request.put('/my/cate/info', data)

// 删除文章分类(这种方式也可用)
// export const artDelChannelService = (id) =>
//   request.delete(`/my/cate/del?id=${id}`)

// 删除文章分类
export const artDelChannelService = (id) =>
  request.delete('/my/cate/del', {
    params: { id }
  })

// 获取文章列表
export const artGetListService = (params) =>
  request.get('/my/article/list', { params })

// 添加文章
export const artPublishService = (data) => request.post('/my/article/add', data)
