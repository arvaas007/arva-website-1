<script setup lang="ts">
import { ref } from 'vue'

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

// State untuk mengatur buka/tutup menu dropdown di HP
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans">
    
    <!-- Navbar Langsung di app.vue (Tidak butuh komponen eksternal) -->
    <header class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-800 transition-all duration-300">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">

          <!-- Top Brand -->
          <NuxtLink to="/" class="flex flex-col justify-center">
            <span class="font-extrabold text-lg md:text-xl text-gray-900 dark:text-white leading-tight">
              Arva Athallah Susanto S.EI., M.SEI
            </span>
            <small class="text-xs md:text-sm text-emerald-600 dark:text-emerald-400 font-medium">
              Master of Science in Islamic Economics
            </small>
          </NuxtLink>

          <!-- Top Nav Links (Desktop) -->
          <div class="hidden md:flex space-x-6 items-center">
            <NuxtLink to="/" class="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors duration-200">Home</NuxtLink>
            <NuxtLink to="/portfolio" class="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors duration-200">Portfolio</NuxtLink>
            <NuxtLink to="/writings" class="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors duration-200">Writings</NuxtLink>
            <NuxtLink to="/contact" class="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors duration-200">Contact</NuxtLink>
          </div>

          <!-- Tombol Hamburger (Mobile) -->
          <div class="md:hidden flex items-center">
            <button @click="toggleMenu" class="text-gray-600 dark:text-gray-300 hover:text-emerald-600 focus:outline-none transition-transform duration-200">
              <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <!-- Ikon Garis Tiga (Buka) -->
                <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                <!-- Ikon X (Tutup) -->
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

        </div>
      </nav>

      <!-- Dropdown Nav Links (Mobile) -->
      <transition
        enter-active-class="transition duration-300 ease-out transform"
        enter-from-class="-translate-y-4 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in transform"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-4 opacity-0"
      >
        <div v-show="isOpen" class="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-xl">
          <div class="px-4 py-4 space-y-2 flex flex-col">
            <NuxtLink to="/" @click="isOpen = false" class="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-gray-800 transition-all">Home</NuxtLink>
            <NuxtLink to="/portfolio" @click="isOpen = false" class="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-gray-800 transition-all">Portfolio</NuxtLink>
            <NuxtLink to="/writings" @click="isOpen = false" class="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-gray-800 transition-all">Writings</NuxtLink>
            <NuxtLink to="/contact" @click="isOpen = false" class="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-gray-800 transition-all">Contact</NuxtLink>
          </div>
        </div>
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
              projects, and digital identity development.
            </p>
          </div>

          <div class="footer-col">
            <h3>Navigation</h3>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
            <NuxtLink to="/portfolio">Portfolio</NuxtLink>
            <NuxtLink to="/writings">Writings</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </div>

          <div class="footer-col">
            <h3>Academic Resources</h3>
            <NuxtLink to="/portfolio">Portfolio</NuxtLink>
            <NuxtLink to="/writings">Selected Writings</NuxtLink>
          </div>

          <div class="footer-col">
            <h3>Contact</h3>
            <p>Email: add-your-email@email.com</p>
            <p>Instagram: add-your-instagram</p>
            <p>LinkedIn: add-your-linkedin</p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2026 Arva Athallah Susanto. Personal Academic Website.</p>

          <div class="footer-socials">
            <a href="#">IG</a>
            <a href="#">IN</a>
            <a href="#">MAIL</a>
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