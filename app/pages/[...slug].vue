<script setup lang="ts">
const route = useRoute()

const path = '/' + (Array.isArray(route.params.slug)
  ? route.params.slug.join('/')
  : route.params.slug)

const { data: post, pending, error } = await useFetch('/api/blogger-path', {
  query: {
    path
  }
})

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
        {{ post.title }}
      </h1>

      <p class="article-date">
        {{ new Date(post.published).toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }) }}
      </p>

      <div class="label-wrap">
        <span
          v-for="label in post.labels"
          :key="label"
          class="label"
        >
          {{ label }}
        </span>
      </div>

      <div class="article-content" v-html="post.content" />

      <div class="article-source">
        <a :href="post.url" target="_blank" rel="noopener noreferrer">
          View original post on Blogger →
        </a>
      </div>
    </article>
  </main>
</template>