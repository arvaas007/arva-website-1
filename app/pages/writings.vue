<script setup lang="ts">
import { ref } from 'vue'

const locale = ref<'id' | 'en'>('en')
const { data, pending, error } = await useFetch<{ posts: Array<any> }>('/api/blogger-posts')

function getPostPath(url: string) {
  try {
    return new URL(url).pathname
  } catch {
    return '#'
  }
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString(
    locale.value === 'id' ? 'id-ID' : 'en-US',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }
  )
}

function getExcerpt(content: string) {
  if (!content) return ''
  const text = content
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  return text.length > 180 ? text.slice(0, 180) + '...' : text
}
</script>

<template>
  <main class="writings-page">
    <section class="writings-hero">
      <p class="writings-kicker">
        Academic Writings
      </p>

      <h1>
        Selected writings, reflections, and digital notes.
      </h1>

      <p>
        Halaman ini menampilkan tulisan yang bersumber dari Blogger Extreme Pro
        Gamer, tetapi disajikan ulang dalam tampilan akademik personal Arva
        Athallah Susanto.
      </p>
    </section>

    <section class="writings-layout">
      <aside class="writings-sidebar">
        <div class="sidebar-card">
          <p class="sidebar-label">
            Content Source
          </p>

          <h2>Blogger Backend</h2>

          <p>
            Artikel tetap dikelola melalui Blogger, sedangkan halaman ini
            menjadi tampilan editorial modern berbasis Nuxt dan Vercel.
          </p>
        </div>

        <div class="sidebar-card">
          <p class="sidebar-label">
            Categories
          </p>

          <div class="sidebar-tags">
            <span>Reflection</span>
            <span>Academic Notes</span>
            <span>Portfolio</span>
            <span>Database of Research</span>
          </div>
        </div>
      </aside>

      <section class="writings-content">
        <div v-if="pending" class="writing-state">
          Memuat tulisan...
        </div>

        <div v-else-if="error" class="writing-state error">
          Gagal memuat tulisan dari Blogger.
        </div>

        <div v-else class="writing-list">
          <article
            v-for="(post, index) in data?.posts"
            :key="post.id"
            class="writing-card"
            :class="{ featured: index === 0 }"
          >
            <div class="writing-meta">
              <span>{{ formatDate(post.published) }}</span>
              <span v-if="index === 0">Featured</span>
            </div>

            <h2>
              {{ post.title }}
            </h2>

            <p class="writing-excerpt">
              {{ getExcerpt(post.content) }}
            </p>

            <div class="writing-labels">
              <span
                v-for="label in post.labels?.slice(0, 4)"
                :key="label"
              >
                {{ label }}
              </span>
            </div>

            <div class="writing-footer">
              <NuxtLink
                :to="getPostPath(post.url)"
                class="writing-read"
              >
                Read article →
              </NuxtLink>
            </div>
          </article>
        </div>
      </section>
    </section>
  </main>
</template>

