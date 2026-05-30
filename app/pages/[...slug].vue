<script setup lang="ts">
const route = useRoute()

const path = '/' + (Array.isArray(route.params.slug)
  ? route.params.slug.join('/')
  : route.params.slug)

import { computed } from 'vue'

const { data: post, pending, error } = await useFetch<{ title: string; published: string; labels: string[]; content: string }>('/api/blogger-path', {
  query: {
    path
  }
})

const postData = computed(() => post.value ?? { title: '', published: '', labels: [] as string[], content: '' })

useHead(() => ({
  title: post.value?.title
    ? `${post.value.title} | Arva Athallah Susanto`
    : 'Article | Arva Athallah Susanto',
  meta: [
    {
      name: 'description',
      content: post.value?.title || 'Article from Extreme Pro Gamer archive'
    }
  ]
}))
</script>

<template>
  <main class="article-page">
    <div v-if="pending" class="article-state">
      Memuat artikel...
    </div>

    <div v-else-if="error" class="article-state">
      <h1>Artikel tidak ditemukan</h1>
      <p>
        Artikel ini tidak ditemukan di arsip Blogger.
      </p>

      <NuxtLink to="/">
        Kembali ke Home
      </NuxtLink>
    </div>

    <article v-else class="article-container">
      <NuxtLink to="/writings" class="article-back">
        ← Back to Writings
      </NuxtLink>

      <p class="article-kicker">
        Blogger Archive
      </p>

          <h1 class="article-title">
            {{ postData.title }}
          </h1>

      <p class="article-date">
        {{ new Date(postData.published).toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }) }}
      </p>

      <div class="label-wrap">
        <span
          v-for="label in postData.labels"
          :key="label"
          class="label"
        >
          {{ label }}
        </span>
     </div>

      <div class="article-content" v-html="postData.content" />

    </article>
  </main>
</template>