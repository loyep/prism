<script lang="ts" setup>
import { watch } from 'vue'
import { Button } from 'ant-design-vue'
import { useRoute, RouterLink } from 'vue-router'
import Header from './components/Header.vue'
const route = useRoute()

watch(route, () => {
  // console.log(route)
})

</script>

<template>
  <div class="layout">
    <Header />
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
  flex-direction: column;
}
</style>

<style src="./layout.less" lang="less">
</style>
