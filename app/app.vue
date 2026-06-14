<script setup lang="ts">
import { ref, watch } from 'vue'

// Pengaturan Meta & Favicon 
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})

// State untuk mengatur buka/tutup menu sidebar di HP
const isOpen = ref(false)
const scrollY = ref(0)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

// Monitor scroll untuk efek navbar
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    scrollY.value = window.scrollY
  })
}

// Close menu ketika route berubah
watch(() => useRoute().path, () => {
  isOpen.value = false
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 font-sans">
    
    <!-- Navbar Stylish Modern -->
    <header class="navbar-container" :class="{ 'navbar-scrolled': scrollY > 10 }">
      <nav class="navbar-content">
        <div class="navbar-inner">
          <!-- Brand Logo & Text -->
          <NuxtLink to="/" class="navbar-brand">
            <img src="/logo.png" alt="ARVA-AS Logo" class="brand-logo-image" />
            <div class="brand-text">
              <span class="brand-main">ARVA-AS</span>
            </div>
          </NuxtLink>

          <!-- Desktop Navigation Links -->
          <div class="navbar-links-desktop">
            <NuxtLink to="/" class="navbar-link">Home</NuxtLink>
            <NuxtLink to="/portfolio" class="navbar-link">Portfolio</NuxtLink>
            <NuxtLink to="/writings" class="navbar-link">Writings</NuxtLink>
            <NuxtLink to="/contact" class="navbar-link">Contact</NuxtLink>
            <NuxtLink to="/hall-of-fame" class="navbar-link">Hall of Fame</NuxtLink>
            <NuxtLink to="/app" class="navbar-link">Apps</NuxtLink>
          </div>

          <!-- Hamburger Menu Button (Mobile) -->
          <button 
            @click="toggleMenu" 
            class="navbar-hamburger"
            :class="{ 'is-open': isOpen }"
            aria-label="Toggle menu"
          >
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
        </div>
      </nav>

      <!-- Mobile Sidebar Menu -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-3"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-3"
      >
        <div v-show="isOpen" class="navbar-mobile-menu">
  <div class="mobile-menu-content">
    <NuxtLink 
      to="/" 
      @click="isOpen = false" 
      class="mobile-menu-link"
    >
      <span class="link-dot"></span>
      Home
    </NuxtLink>

    <NuxtLink 
      to="/portfolio" 
      @click="isOpen = false" 
      class="mobile-menu-link"
    >
      <span class="link-dot"></span>
      Portfolio
    </NuxtLink>

    <NuxtLink 
      to="/writings" 
      @click="isOpen = false" 
      class="mobile-menu-link"
    >
      <span class="link-dot"></span>
      Writings
    </NuxtLink>

    <NuxtLink 
      to="/contact" 
      @click="isOpen = false" 
      class="mobile-menu-link"
    >
      <span class="link-dot"></span>
      Contact
    </NuxtLink>

    <!-- FIX 1: Menutup tag Hall of Fame secara mandiri dan benar -->
    <NuxtLink 
      to="/hall-of-fame" 
      @click="isOpen = false" 
      class="mobile-menu-link"
    >
      <span class="link-dot"></span>
      Hall of Fame
    </NuxtLink>

    <NuxtLink 
      to="/app" 
      @click="isOpen = false" 
      class="mobile-menu-link"
    >
      <span class="link-dot"></span>
      Apps
    </NuxtLink>
  </div>
</div>
<!-- FIX 3: Dihapus </transition> jika di atas memang tidak memakai pembuka <transition> -->
      </transition>
    </header>

    <!-- Konten Halaman (Diberi padding-top agar tidak tertutup header yang melayang) -->
    <main class="pt-24 min-h-screen">
      <NuxtPage />
    </main>

    <!-- Footer Asli -->
    <footer class="academic-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="footer-logo">A</div>
          <div>
            <h2>Arva Athallah Susanto</h2>
            <p>Personal Academic Website</p>
          </div>
        </div>

        <div class="footer-grid">
          <div class="footer-col">
            <h3>Profile</h3>
            <p>
              A personal academic website for profile, portfolio, writings,
              and projects development.
            </p>
          </div>

          <div class="footer-col">
            <h3>Navigation</h3>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
            <NuxtLink to="/portfolio">Portfolio</NuxtLink>
            <NuxtLink to="/writings">Writings</NuxtLink>
          </div>

          <div class="footer-col">
            <h3>Academic Resources</h3>
            <a href="https://scholar.google.com/citations?user=7gI4mGYAAAAJ&hl=id" target="_blank">
              Google Scholar
            </a>
          </div>

          <div class="footer-col">
            <h3>Address</h3>
            Sidoarjo, East Java, Indonesia<br />
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2026 Arva Athallah Susanto.</p>

          <div class="footer-socials">
            <a href="https://www.instagram.com/arva_as" target="_blank" rel="noopener noreferrer">IG</a>
            <a href="https://www.linkedin.com/in/arva-athallah-susanto" target="_blank" rel="noopener noreferrer">IN</a>
            <a href="mailto:arva.susanto@cisf.com">MAIL</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Mewarnai link halaman yang sedang aktif menggunakan CSS standar murni tanpa @apply */
.router-link-active {
  color: #059669 !important; /* emerald-600 */
  font-weight: 700 !important;
}

@media (prefers-color-scheme: dark) {
  .router-link-active {
    color: #34d399 !important; /* emerald-400 */
  }
}
</style>