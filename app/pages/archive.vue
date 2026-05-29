<script setup lang="ts">
const { data, pending, error } = await useFetch('/api/blogger-posts')
</script>

<template>
  <main class="page">
    <p class="eyebrow">
      Legacy Archive
    </p>

    <h1 class="section-title">
      Extreme Pro Gamer Archive
    </h1>

    <p class="section-desc">
      Sebelum bertransformasi menjadi website personal branding Arva Athallah
      Susanto, Extreme Pro Gamer pernah menjadi ruang publikasi seputar game,
      teknologi, tutorial, dan konten digital. Halaman ini menyimpan arsip
      perjalanan digital tersebut.
    </p>

    <div v-if="pending" class="post-list">
      Memuat arsip...
    </div>

    <div v-else-if="error" class="post-list">
      Gagal memuat arsip dari Blogger.
    </div>

    <section v-else class="post-list">
      <article
        v-for="post in data?.posts"
        :key="post.id"
        class="post-card"
      >
        <h2 class="post-title">
          {{ post.title }}
        </h2>

        <p class="post-date">
          {{ new Date(post.published).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }) }}
        </p>

        <a
          :href="post.url"
          target="_blank"
          class="read-link"
        >
          View archive →
        </a>
      </article>
    </section>
  </main>
</template>