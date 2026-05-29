<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>
<template>
  <div>
    <header class="main-header">
      <nav class="top-navbar">
        <NuxtLink to="/" class="top-brand">
          <span>Arva Athallah Susanto</span>
          <small>Personal Academic Website</small>
        </NuxtLink>

        <div class="top-nav-links">
  <NuxtLink to="/">Home</NuxtLink>
  <NuxtLink to="/portfolio">Portfolio</NuxtLink>
  <NuxtLink to="/writings">Writings</NuxtLink>
  <NuxtLink to="/contact">Contact</NuxtLink>
</div>
      </nav>
    </header>

    <NuxtPage />

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