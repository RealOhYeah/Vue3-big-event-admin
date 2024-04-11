<script setup>
import { ref } from 'vue'

// 用于弹出确认框
const dialogVisible = ref(false)

const open = (row) => {
  console.log(row)
  dialogVisible.value = true
}
defineExpose({
  open
})
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    title="添加弹层"
    width="500"
    :before-close="handleClose"
  >
    <span>我是内容部分</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
