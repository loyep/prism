<script lang="ts" >
import { defineComponent } from 'vue'

export default defineComponent({
    name: "ClientOnly",
    data() {
        return {
            isMounted: false,
        }
    },
    mounted() {
        this.isMounted = true
    },
    render() {
        return this.$slots.default && this.isMounted ? this.$slots.default() : null
    }
})
</script>