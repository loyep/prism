<script lang="ts">
import { onMounted, ref, watch, defineComponent } from 'vue'

export default defineComponent({
    name: 'NoSsr',
    props: { defer: { type: Boolean, default: false } },
    emits: ['mounted'],
    setup(props, { slots, emit }) {
        const mounted = ref(false)

        watch(() => props.defer, () => { if (!props.defer) mounted.value = true })
        watch(() => mounted, () => emit('mounted', mounted.value))
        onMounted(() => mounted.value = true)

        return () => mounted.value ? slots.default?.() : slots.fallback?.()
    }
})
</script>