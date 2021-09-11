<template>
  <div>
    test
    <div>
      <ArticleItem v-for="article in articles" :key="article.id" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ArticleItem from '@/components/article/item.vue'
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'

const store = useStore()
const articles = computed(() => store.state.home.articles)

onMounted(() => {
  console.log('1')
})
</script>
