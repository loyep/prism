<template>
  <Component :is="layoutComp">
    <ConfigProvider :locale="zhCN" virtual :autoInsertSpaceInButton="false">
      <router-view />
    </ConfigProvider>
  </Component>
</template>

<script lang="ts" setup>
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/lib/locale/zh_CN';
import Layout from '@/layouts/index.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()

const props = defineProps({
  asyncData: {
    type: Object,
    required: true,
  },
  fetchData: {
    type: Object,
    required: true,
  }
})

const layoutComp = computed(() => {
  if (route.path === '/login' || route.path === '/register') {
    return AuthLayout
  }
  return Layout
})

if (__isBrowser__) {
  // console.log(props)
}
</script>
