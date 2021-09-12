<template>
  <Layout>
    <ConfigProvider :locale="zhCN" virtual :autoInsertSpaceInButton="false">
      <router-view />
    </ConfigProvider>
  </Layout>
</template>

<script lang="ts" setup>
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/lib/locale/zh_CN';
import Layout from '@/layouts/index.vue'

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

if (__isBrowser__) {
  console.log(props)
}
</script>
