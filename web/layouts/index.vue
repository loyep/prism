<script lang="ts" setup>
import { watch } from 'vue'
import { Button } from 'ant-design-vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'
const router = useRouter()
const route = useRoute()
const onTestPush = () => {
  router.push('/category/test001')
}

watch(route, () => {
  console.log(route)
})

</script>

<template>
  <div class="layout">
    <slot />
    <RouterLink to="/category/test001">
      <Button>category/test001</Button>
    </RouterLink>
    <RouterLink to="/">Home</RouterLink>
  </div>
</template>

<style lang="less" scoped>
.layout {
  display: flex;
  min-height: 100vh;
  width: 100%;
}
</style>
