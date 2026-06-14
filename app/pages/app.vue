<script setup lang="ts">
useHead({
  title: 'App Dashboard — ARVA-AS',
  meta: [
    { name: 'description', content: 'Dashboard aplikasi dan website digital buatan Arva Athallah Susanto. Eksplorasi ekosistem karya digital dari Arverse, Podge, Game Zeta, dan lainnya.' }
  ]
})

const apps = [
  {
    id: 'arverse',
    number: '01',
    emoji: '🌌',
    label: 'Qur\'an App',
    name: 'Arverse',
    tagline: 'Digital Qur\'an with Gamification',
    description: 'Aplikasi Qur\'an digital dengan fitur gamifikasi setor murojaah harian. Kartu dipilih secara acak dan menampilkan ayat tujuan secara interaktif.',
    url: 'https://arverse.vercel.app/',
    internalRoute: '/arverse',
    color: '#3b82f6',
    colorDark: '#1d4ed8',
    featured: true,
    tags: ['Quran', 'Gamification', 'Daily Habit'],
  },
  {
    id: 'podge',
    number: '02',
    emoji: '🧩',
    label: 'Ecosystem',
    name: 'Podge',
    tagline: 'Centralized App Portal',
    description: 'Portal aplikasi digital Arva — menyediakan akses terpusat ke berbagai layanan dan platform ekosistem Podge.',
    url: 'https://podge-ecosystem.vercel.app',
    internalRoute: '/podge',
    color: '#8b5cf6',
    colorDark: '#6d28d9',
    featured: false,
    tags: ['Portal', 'Ecosystem', 'Multi-platform'],
  },
  {
    id: 'gmae-zeta',
    number: '03',
    emoji: '🎮',
    label: 'Game',
    name: 'Game Zeta',
    tagline: 'Web-Based Game Project',
    description: 'Proyek game berbasis web buatan Arva — eksplorasi desain interaktif, logika permainan, dan pengembangan UI/UX melalui medium gamifikasi.',
    url: 'https://gmae-zeta.vercel.app',
    internalRoute: null,
    color: '#10b981',
    colorDark: '#059669',
    featured: false,
    tags: ['Game', 'Interactive', 'Web Dev'],
  },
]
</script>

<template>
  <div class="app-dashboard">
    <!-- Hero Header -->
    <section class="app-dashboard-hero">
      <div class="app-hero-bg">
        <div class="app-hero-orb orb-1"></div>
        <div class="app-hero-orb orb-2"></div>
        <div class="app-hero-orb orb-3"></div>
      </div>
      <div class="app-hero-inner">
        <p class="arva-kicker">Digital Works</p>
        <h1 class="app-hero-title">App Dashboard</h1>
        <p class="app-hero-subtitle">
          Koleksi aplikasi &amp; website digital buatan<br />
          <strong>Arva Athallah Susanto</strong>
        </p>
        <div class="app-hero-meta">
          <span class="app-meta-badge">{{ apps.length }} Projects</span>
          <span class="app-meta-badge">Live &amp; Active</span>
        </div>
      </div>
    </section>

    <!-- App Grid -->
    <section class="app-grid-section">
      <div class="app-grid">
        <article
          v-for="(app, i) in apps"
          :key="app.id"
          class="app-card"
          :class="{ 'app-card--featured': app.featured }"
          :style="`--app-color: ${app.color}; --app-color-dark: ${app.colorDark}; --delay: ${i * 100}ms`"
          data-animate="fade-up"
        >
          <!-- Card Top -->
          <div class="app-card-top">
            <div class="app-icon-wrap">
              <span class="app-icon">{{ app.emoji }}</span>
            </div>
            <div class="app-card-meta">
              <span class="app-number">{{ app.number }}</span>
              <span class="app-label-badge">{{ app.label }}</span>
            </div>
          </div>

          <!-- Card Body -->
          <div class="app-card-body">
            <h2 class="app-name">{{ app.name }}</h2>
            <p class="app-tagline">{{ app.tagline }}</p>
            <p class="app-desc">{{ app.description }}</p>

            <!-- Tags -->
            <div class="app-tags">
              <span v-for="tag in app.tags" :key="tag" class="app-tag">{{ tag }}</span>
            </div>
          </div>

          <!-- Card Footer -->
          <div class="app-card-footer">
            <a
              :href="app.url"
              target="_blank"
              rel="noopener noreferrer"
              class="app-open-btn"
            >
              <span>Open {{ app.name }}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15,3 21,3 21,9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
            <NuxtLink
              v-if="app.internalRoute"
              :to="app.internalRoute"
              class="app-internal-link"
            >
              Info →
            </NuxtLink>
          </div>

          <!-- Decorative glow -->
          <div class="app-card-glow"></div>
        </article>
      </div>
    </section>

    <!-- Footer CTA -->
    <section class="app-cta-section">
      <div class="app-cta-inner">
        <p class="arva-kicker">More Coming Soon</p>
        <h2>Ekosistem digital yang terus berkembang.</h2>
        <p>Setiap aplikasi mencerminkan eksplorasi dan pertumbuhan Arva dalam pengembangan digital, riset, dan identitas akademik.</p>
        <NuxtLink to="/portfolio" class="arva-btn primary">View Full Portfolio →</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ── LAYOUT ─────────────────────────────── */
.app-dashboard {
  min-height: 100vh;
  background: #f8fafc;
  font-family: 'Inter', system-ui, sans-serif;
}

/* ── HERO ───────────────────────────────── */
.app-dashboard-hero {
  position: relative;
  background: #0f172a;
  overflow: hidden;
  padding: 100px 24px 80px;
  text-align: center;
}

.app-hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.app-hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.25;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: #3b82f6;
  top: -100px;
  left: -80px;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: #8b5cf6;
  bottom: -60px;
  right: -40px;
}

.orb-3 {
  width: 200px;
  height: 200px;
  background: #10b981;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
}

.app-hero-inner {
  position: relative;
  z-index: 2;
  max-width: 700px;
  margin: 0 auto;
}

.app-hero-title {
  margin: 12px 0 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(48px, 8vw, 96px);
  letter-spacing: -0.06em;
  line-height: 0.95;
  color: #ffffff;
}

.app-hero-subtitle {
  margin: 20px 0 0;
  color: #94a3b8;
  font-size: 17px;
  line-height: 1.6;
}

.app-hero-subtitle strong {
  color: #e2e8f0;
}

.app-hero-meta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 28px;
}

.app-meta-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

/* ── GRID ───────────────────────────────── */
.app-grid-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 24px 80px;
}

.app-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* ── CARD ───────────────────────────────── */
.app-card {
  position: relative;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 28px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.3s ease;
  box-shadow: 0 4px 24px rgba(15, 23, 42, 0.06);
}

.app-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 64px rgba(15, 23, 42, 0.14);
  border-color: var(--app-color);
}

.app-card:hover .app-card-glow {
  opacity: 1;
}

.app-card--featured {
  background: #0f172a;
  border-color: rgba(255, 255, 255, 0.08);
  grid-column: span 1;
}

.app-card--featured:hover {
  border-color: var(--app-color);
}

/* Glow effect */
.app-card-glow {
  position: absolute;
  inset: 0;
  border-radius: 28px;
  background: radial-gradient(circle at top left, var(--app-color), transparent 60%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  mix-blend-mode: soft-light;
}

/* ── CARD TOP ───────────────────────────── */
.app-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.app-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--app-color), var(--app-color-dark));
  box-shadow: 0 8px 24px -4px color-mix(in srgb, var(--app-color) 40%, transparent);
}

.app-icon {
  font-size: 26px;
  line-height: 1;
}

.app-card-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
}

.app-number {
  font-size: 28px;
  font-family: Georgia, serif;
  font-weight: 700;
  letter-spacing: -0.04em;
  color: #cbd5e1;
  line-height: 1;
}

.app-card--featured .app-number {
  color: rgba(255, 255, 255, 0.2);
}

.app-label-badge {
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--app-color) 12%, transparent);
  color: var(--app-color);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.app-card--featured .app-label-badge {
  background: color-mix(in srgb, var(--app-color) 20%, transparent);
}

/* ── CARD BODY ──────────────────────────── */
.app-card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.app-name {
  margin: 0;
  font-size: 26px;
  letter-spacing: -0.04em;
  color: #0f172a;
  font-family: Georgia, serif;
}

.app-card--featured .app-name {
  color: #f8fafc;
}

.app-tagline {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: var(--app-color);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.app-desc {
  margin: 4px 0 0;
  color: #64748b;
  font-size: 14px;
  line-height: 1.7;
}

.app-card--featured .app-desc {
  color: #94a3b8;
}

/* Tags */
.app-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}

.app-tag {
  padding: 3px 10px;
  border-radius: 999px;
  background: #f1f5f9;
  color: #475569;
  font-size: 11px;
  font-weight: 600;
}

.app-card--featured .app-tag {
  background: rgba(255, 255, 255, 0.07);
  color: #94a3b8;
}

/* ── CARD FOOTER ────────────────────────── */
.app-card-footer {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 16px;
  border-top: 1px solid #f1f5f9;
}

.app-card--featured .app-card-footer {
  border-top-color: rgba(255, 255, 255, 0.07);
}

.app-open-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--app-color), var(--app-color-dark));
  color: #ffffff;
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 16px -4px color-mix(in srgb, var(--app-color) 60%, transparent);
}

.app-open-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px -4px color-mix(in srgb, var(--app-color) 70%, transparent);
}

.app-internal-link {
  color: #94a3b8;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
}

.app-internal-link:hover {
  color: var(--app-color);
}

/* ── CTA SECTION ────────────────────────── */
.app-cta-section {
  background: #0f172a;
  padding: 100px 24px;
  text-align: center;
}

.app-cta-inner {
  max-width: 640px;
  margin: 0 auto;
}

.app-cta-inner h2 {
  margin: 12px 0 0;
  font-family: Georgia, serif;
  font-size: clamp(32px, 5vw, 52px);
  letter-spacing: -0.05em;
  line-height: 1.1;
  color: #f8fafc;
}

.app-cta-inner p {
  margin: 16px 0 32px;
  color: #64748b;
  font-size: 16px;
  line-height: 1.75;
}

/* ── SCROLL ANIMATIONS ──────────────────── */
[data-animate="fade-up"] {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay, 0ms);
}

[data-animate="fade-up"].is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ── RESPONSIVE ─────────────────────────── */
@media (max-width: 900px) {
  .app-grid {
    grid-template-columns: 1fr;
  }

  .app-dashboard-hero {
    padding: 80px 20px 60px;
  }
}

@media (max-width: 600px) {
  .app-card {
    padding: 24px 20px;
  }

  .app-icon-wrap {
    width: 48px;
    height: 48px;
  }

  .app-name {
    font-size: 22px;
  }
}
</style>
