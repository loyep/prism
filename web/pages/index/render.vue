<template>
  <Banner />
  <ArticleItem v-for="article in articles" :key="article.id" />
  <div class="layout-wrapper">
    test
    <div>
      <ArticleItem v-for="article in articles" :key="article.id" />
    </div>
    <ClientOnly>test1111</ClientOnly>
    <RouterLink to="/register">Register</RouterLink>
    {{ state.mode }}
  </div>
  <ClientOnly>test1111</ClientOnly>

  <RouterLink to="/register">Register</RouterLink>
  <TestDemo />
</template>

<script lang="ts" setup>
import ArticleItem from '@/components/article/item.vue'
import { computed, onMounted, } from 'vue';
import { useStore } from 'vuex'
import ClientOnly from '@/components/common/NoSsr.vue';
import { RouterLink } from 'vue-router'
import Banner from '@/components/common/Banner.vue'
import { useTheme } from '@/hooks/useTheme';
const { state } = useTheme()

const store = useStore()
const articles = computed(() => store.state.home.articles)

onMounted(() => {
  // console.log('1')
})
</script>
