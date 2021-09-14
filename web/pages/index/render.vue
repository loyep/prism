<template>
  <div class="layout-wrapper">
    test
    <div>
      <ArticleItem v-for="article in articles" :key="article.id" />
    </div>
    <ClientOnly>test1111</ClientOnly>

    <RouterLink to="/register">Register</RouterLink>
    <TestDemo />
  </div>
</template>

<script lang="tsx" setup>
import ArticleItem from '@/components/article/item.vue'
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'
import ClientOnly from '@/components/common/ClientOnly.vue';
import { RouterLink } from 'vue-router'

const store = useStore()
const articles = computed(() => store.state.home.articles)

const TestDemo = () => {
  return <div>基于Render方法渲染的标签</div>
}

onMounted(() => {
  // console.log('1')
})
</script>
