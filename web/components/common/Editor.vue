<script lang="ts" setup>
import { onMounted, ref } from 'vue'
const editor = ref()

onMounted(() => {
    import('vditor').then((VditorModule) => {
        const Vditor = VditorModule.default
        editor.value = new Vditor('vditor', {})
    })
})
</script>

<template>
    <div id="vditor"></div>
</template>