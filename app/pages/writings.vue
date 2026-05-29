<script setup lang="ts">
const { data, pending, error } = await useFetch('/api/blogger-posts')
</script>

<template>
  <main class="page">
    <p class="eyebrow">
      Writings
    </p>

    <h1 class="section-title">
      Latest Writings
    </h1>

    <p class="section-desc">
      Kumpulan tulisan yang diambil langsung dari Blogger sebagai backend
      konten, lalu ditampilkan kembali melalui frontend Nuxt.
    </p>

    <div v-if="pending" class="post-list">
      Memuat artikel...
    </div>

    <div v-else-if="error" class="post-list">
      Gagal memuat artikel dari Blogger.
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

        <div class="label-wrap">
          <span
            v-for="label in post.labels"
            :key="label"
            class="label"
          >
            {{ label }}
          </span>
        </div>

        <a
          :href="post.url"
          target="_blank"
          class="read-link"
        >
          Read on Blogger →
        </a>
      </article>
    </section>
  </main>
</template>