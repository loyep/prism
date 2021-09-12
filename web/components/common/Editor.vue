<script lang="ts" setup>
import { onMounted, ref } from 'vue'
// import("vditor/index.css")
const editor = ref()

onMounted(async () => {
    import('vditor').then((VditorModule) => {
        const Vditor = VditorModule.default
        editor.value = new Vditor('vditor', {})
    })
})
</script>

<template>
    <div id="vditor"></div>
</template>

<style >
@import "~vditor/dist/index.css";
</style>