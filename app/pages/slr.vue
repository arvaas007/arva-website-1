<script setup>
import { onMounted } from 'vue'

// Alamat target Engine SLR Premium Anda
const targetUrl = 'https://arva-slr.vercel.app/slr/'

onMounted(() => {
  // Otomatis mengalihkan browser setelah 2 detik halaman terbuka
  setTimeout(() => {
    window.location.href = targetUrl
  }, 2000)
})
</script>

<template>
  <div class="bridge-container">
    <div class="bridge-card">
      <!-- Header Brand -->
      <div class="brand-header">
        <span class="brand-logo">A</span>
        <span class="brand-name">ARVA-AS</span>
      </div>

      <!-- Ruang Animasi/Icon -->
      <div class="animation-workspace">
        <div class="pulse-ring"></div>
        <div class="core-icon">🤖</div>
      </div>

      <!-- Pesan Navigasi -->
      <h2 class="redirect-title">Membuka SLR Engine Premium</h2>
      <p class="redirect-subtitle">
        Sistem sedang mengalihkan koneksi Anda ke dashboard platform <br />
        <strong>SLR & Bibliometric Disruptive Engine</strong> secara aman.
      </p>

      <!-- Progress Bar Mini -->
      <div class="progress-bar-container">
        <div class="progress-bar-fill"></div>
      </div>

      <!-- Tombol Tindakan Manual (UI/UX Fallback) -->
      <div class="action-zone">
        <span class="fallback-text">Pengalihan otomatis macet?</span>
        <a :href="targetUrl" class="btn-redirect-action">
          Klik di Sini untuk Melanjutkan ➔
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* BACKGROUND CONTAINER JEMBATAN */
.bridge-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at top right, #0f172a 0%, #020617 100%);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  padding: 20px;
  box-sizing: border-box;
}

/* KARTU GLASSMORPHISM PREMIUM */
.bridge-card {
  background: rgba(255, 255, 255, 0.03);
  -webkit-backdrop-filter: blur(16px) saturate(120%);
  backdrop-filter: blur(16px) saturate(120%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 40px;
  max-width: 480px;
  width: 100%;
  text-align: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

/* BRAND LOGO */
.brand-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 35px;
}

.brand-logo {
  background: linear-gradient(135deg, #3b82f6 0%, #0d9488 100%);
  color: white;
  font-weight: 900;
  font-size: 14px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}

.brand-name {
  color: #94a3b8;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}

/* ANIMASI PULSE RING & INTERAKSI */
.animation-workspace {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 25px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.core-icon {
  font-size: 40px;
  z-index: 2;
}

.pulse-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(13, 148, 136, 0.15);
  animation: ripple 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  z-index: 1;
}

/* TEKS INFORMASI */
.redirect-title {
  color: #f8fafc;
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 10px 0;
}

.redirect-subtitle {
  color: #94a3b8;
  font-size: 13px;
  line-height: 1.6;
  margin: 0 0 30px 0;
}

.redirect-subtitle strong {
  color: #0d9488;
}

/* LOADING BAR PROGRESS */
.progress-bar-container {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 40px;
}

.progress-bar-fill {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, #3b82f6 0%, #0d9488 100%);
  border-radius: 10px;
  animation: load 2s linear forwards;
}

/* ACTION BUTTON ZONE */
.action-zone {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.fallback-text {
  color: #64748b;
  font-size: 11px;
}

.btn-redirect-action {
  display: inline-block;
  padding: 12px 30px;
  background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%);
  color: #ffffff;
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 10px 20px -10px rgba(13, 148, 136, 0.5);
}

.btn-redirect-action:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 25px -8px rgba(13, 148, 136, 0.7);
  background: linear-gradient(135deg, #0f766e 0%, #115e59 100%);
}

/* KEYFRAMES ANIMASI */
@keyframes ripple {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}

@keyframes load {
  0% { width: 0%; }
  100% { width: 100%; }
}

/* RESPONSIF HP BARAT */
@media (max-width: 480px) {
  .bridge-card {
    padding: 30px 20px;
  }
  .redirect-title {
    font-size: 18px;
  }
  .redirect-subtitle {
    font-size: 12px;
  }
}
</style>