<script lang="ts" setup>
import { Button } from 'ant-design-vue'

</script>

<template>
  <div class="layout">
    <slot />
    <Button>test</Button>
  </div>
</template>

<style lang="less" scoped>
.layout {
  display: flex;
  min-height: 100vh;
  width: 100%;
}
</style>
