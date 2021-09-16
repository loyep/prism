
<script lang="tsx" setup>
import { computed, h } from "vue";

const siteTitle = computed(() => {
  return 'Kova'
})

const globalData = { name: 'Kova' }
window.globalData = globalData
const GlobalDataScript = () => h('script', { innerHTML: `window.globalData=${JSON.stringify(globalData)};` })
</script>

<template>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>{{ siteTitle }}</title>
    <slot name="viteClient" />
    <slot name="customeHeadScript" />
    <slot name="cssInject" />
    <GlobalDataScript />
  </head>
  <body>
    <div id="app">
      <slot name="children" />
    </div>
    <slot name="initialData" />
    <slot name="customeFooterScript" />
    <slot name="jsInject" />
  </body>
</html>
</template>
