

<script lang="tsx">
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/lib/locale/zh_CN';
import Layout from '@/layouts/index.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import { computed, defineComponent } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import { ThemeProvider } from '@/hooks/useTheme'

export default defineComponent({
  name: 'App',
  props: {
    asyncData: {
      type: Object,
      required: true,
    },
    fetchData: {
      type: Object,
      required: true,
    }
  },
  setup(_, ctx) {
    const route = useRoute()

    const LayoutComp = computed(() => {
      if (route.path === '/login' || route.path === '/register') {
        return AuthLayout
      }
      return Layout
    })

    return () => (
      <ThemeProvider>
        <ConfigProvider locale={zhCN} virtual autoInsertSpaceInButton={false}>
          <LayoutComp.value>
            <RouterView />
          </LayoutComp.value>
        </ConfigProvider>
      </ThemeProvider>
    )
  }
})
</script>
