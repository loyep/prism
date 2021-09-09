<script lang="ts" setup>
import { Button } from 'ant-design-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const onTestPush = () => {
  router.push('/category/test001')
}
</script>

<template>
  <div class="layout">
    <slot />
    <Button @click="onTestPush">test</Button>
  </div>
</template>

<style lang="less" scoped>
.layout {
  display: flex;
  min-height: 100vh;
  width: 100%;
}
</style>
