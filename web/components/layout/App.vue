<template>
  <div>
    <ConfigProvider :locale="zhCN" virtual :autoInsertSpaceInButton="false">
      <Layout>
        <router-view />
      </Layout>
    </ConfigProvider>
  </div>
</template>

<script lang="ts" setup>
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/lib/locale/zh_CN';
import Layout from '@/layouts/index.vue'

defineProps({
  asyncData: {
    type: Object,
    required: true,
  },
  fetchData: {
    type: Object,
    required: true,
  }
})
</script>
