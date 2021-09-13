<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'

const props = defineProps({ defer: { type: Boolean, default: false } })
const emits = defineEmits(['mounted'])
const mounted = ref(false)

watch(() => props.defer, () => {
    if (!props.defer) mounted.value = true
})
watch(() => mounted, () => emits('mounted', mounted.value))

onMounted(() => mounted.value = true)
</script>

<template>
    <slot v-if="mounted" />
    <slot v-else name="fallback" />
</template>