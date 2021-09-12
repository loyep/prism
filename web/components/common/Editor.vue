<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Spin } from 'ant-design-vue'
const editor = ref()
const loadig = ref(false)

onMounted(async () => {
    loadig.value = true
    import('vditor').then((VditorModule) => {
        const Vditor = VditorModule.default
        editor.value = new Vditor('vditor', {
            cache: {
                enable: false,
            },
            after: () => {
                loadig.value = false
            }
        })
    })
})
</script>

<template>
    <Spin :spinning="loadig">
        <div id="vditor"></div>
    </Spin>
</template>

<style >
@import "~vditor/dist/index.css";
</style>