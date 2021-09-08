<template>
  <ConfigProvider :locale="zhCN">
    <router-view />
    <Button>test</Button>
  </ConfigProvider>
</template>

<script lang="ts" setup>
// import { defineComponent } from 'vue';
import { Button, ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/lib/locale/zh_CN';

// export default defineComponent({
//   components: {
//     Button,
//     ConfigProvider,
//   },
//   setup(props) {
//     console.log(props)
//     return {
//       zhCN
//     }
//   }
// })
</script>
