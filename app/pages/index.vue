<script setup lang="ts">
const isHeroVideoPlaying = ref(false)
const heroVideoRef = ref<HTMLVideoElement | null>(null)

async function toggleHeroVideo() {
  if (!heroVideoRef.value) return

  if (heroVideoRef.value.paused) {
    await heroVideoRef.value.play()
    isHeroVideoPlaying.value = true
  } else {
    heroVideoRef.value.pause()
    isHeroVideoPlaying.value = false
  }
}
onMounted(() => {
  if (heroVideoRef.value && !heroVideoRef.value.paused) {
    isHeroVideoPlaying.value = true
  }
})
</script>
<template>
  <main>
    <section class="arva-hero">
      <div class="network-bg">
        <span class="node n1"></span>
        <span class="node n2"></span>
        <span class="node n3"></span>
        <span class="node n4"></span>
        <span class="node n5"></span>

        <span class="line l1"></span>
        <span class="line l2"></span>
        <span class="line l3"></span>
        <span class="line l4"></span>
      </div>

      <div class="arva-hero-inner">
        <div class="arva-hero-content">
          <p class="arva-kicker">
            Personal Academic Website
          </p>

          <h1 class="arva-hero-title">
            Arva Athallah Susanto S.EI., M.SEI
          </h1>

          <p class="arva-hero-subtitle">
            Academic Portfolio · Digital Identity · Personal Branding
          </p>

          <p class="arva-hero-desc">
            A personal academic platform documenting learning journeys,
            selected works, writings, projects, digital transformation, and the
            evolution from a digital content archive into a focused academic and
            professional identity.
          </p>

          <div class="arva-actions">
            <NuxtLink to="/contact" class="arva-btn primary">
              Contact Arva
            </NuxtLink>

            <NuxtLink to="/portfolio" class="arva-btn secondary">
              View Portfolio
            </NuxtLink>
          </div>
        </div>

        <div class="arva-hero-panel arva-video-panel">
  <div
    class="arva-video-frame"
    :class="{ 'is-playing': isHeroVideoPlaying }"
    @click="toggleHeroVideo"
    style="cursor: pointer;"
  >
    <video
      ref="heroVideoRef"
      src="/videos/arva-intro.mp4"
      class="arva-intro-video"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      @play="isHeroVideoPlaying = true"
      @pause="isHeroVideoPlaying = false"
    />

    <div class="arva-video-overlay"></div>

    <button
      type="button"
      class="arva-video-play"
      @click.stop="toggleHeroVideo"
    >
      <span v-if="!isHeroVideoPlaying">▶</span>
      <span v-else>Ⅱ</span>
    </button>

    <div class="arva-video-caption">
      <p>Arva Academic Profile</p>
      <span>
        {{ isHeroVideoPlaying ? 'Playing introduction video' : 'Click to play video' }}
      </span>
    </div>
  </div>

  <div class="arva-video-info">
    <h2>Academic Digital Identity</h2>

    <p>
      A curated space for profile building, intellectual growth,
      portfolio documentation, reflective writings, and academic
      development.
    </p>
  </div>
</div>
      </div>
    </section>

    <section class="number-section">
      <div class="number-grid">
        <div class="number-card">
          <h3>12</h3>
          <p>Number of Publications in Google Scholars</p>
        </div>

        <div class="number-card">
          <h3>44</h3>
          <p>H-Index in Google Scholars</p>
        </div>

        <div class="number-card">
          <h3>7</h3>
          <p>Global Academic Experiences</p>
        </div>

        <div class="number-card">
          <h3>∞</h3>
          <p>Continuous learning, growth, and digital development</p>
        </div>
      </div>
    </section>

    <section class="arva-section">
      <div class="section-two-col">
        <div>
          <p class="arva-kicker">
            Contact
          </p>

          <h2>
            From Indonesia to The World.
          </h2>
        </div>

        <div>
          <p>
            Website ini dirancang sebagai ruang akademik personal yang lebih
            matang. Identitas utama diarahkan pada profil, portofolio, tulisan,
            project, dan dokumentasi perkembangan diri Arva Athallah Susanto.
          </p>

          <NuxtLink to="/contact" class="arva-text-link">
            Contact Arva →
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="arva-section soft-bg">
      <div class="section-heading-center">
        <p class="arva-kicker">
          Focus Areas
        </p>

        <h2>
          A structured platform for academic and creative development.
        </h2>

        <p>
          Setiap bagian website dibuat untuk membangun identitas digital yang
          rapi, profesional, akademik, dan mudah dikembangkan.
        </p>
      </div>

      <div class="program-grid">
        <div class="program-card featured">
          <span class="program-label">Featured</span>
          <p class="program-number">01</p>
          <h3>Academic Profile</h3>
          <p>
            Menampilkan profil, latar belakang, minat, nilai, dan arah
            pengembangan diri secara profesional.
          </p>

          <NuxtLink to="/contact" class="arva-text-link">
            Open Profile →
          </NuxtLink>
        </div>

        <div class="program-card">
          <p class="program-number">02</p>
          <h3>Portfolio & Projects</h3>
          <p>
            Mendokumentasikan karya, proyek, pengalaman, capaian, dan proses
            belajar sebagai bagian dari personal branding.
          </p>
        </div>

        <div class="program-card">
          <p class="program-number">03</p>
          <h3>Writings</h3>
          <p>
            Menghubungkan tulisan dari Blogger sebagai backend konten ke
            tampilan frontend Nuxt yang lebih modern.
          </p>
        </div>
      </div>
    </section>

    <section class="arva-section">
      <div class="section-heading-center">
        <p class="arva-kicker">
          Approach
        </p>

        <h2>
          Four principles that shape this website.
        </h2>
      </div>

      <div class="principle-list">
        <div class="principle-item">
          <span>01 —</span>
          <h3>Academic Integrity</h3>
          <p>
            Menjunjung tinggi standar etika dan impresi intelektual yang kredibel, rapi, dan profesional. 
            Fokus utama saya adalah menyajikan output riset, analisis kebijakan, dan pemikiran makroekonomi Islam 
            secara terstruktur demi memberikan kontribusi nyata bagi literatur ilmiah global.
          </p>
        </div>

        <div class="principle-item">
          <span>02 —</span>
          <h3>Archive Without Noise</h3>
          <p>
            Konten lama tetap dapat diakses, tetapi tidak mengganggu identitas
            baru sebagai website personal akademik.
          </p>
        </div>

        <div class="principle-item">
          <span>03 —</span>
          <h3>Portfolio-Driven Evidence</h3>
          <p>
            Berorientasi pada pembuktian kompetensi yang berbasis pada karya nyata. Prinsip profesional saya adalah 
            menunjukkan hasil konkret dari proses belajar dan riset, mulai dari publikasi ilmiah, proyek analisis bibliometrik 
            dan Systematic Literature Review (SLR), hingga penguasaan teknis dalam tata kelola database dan SQL.
          </p>
        </div>

        <div class="principle-item">
          <span>04 —</span>
          <h3>Scalable Methodology</h3>
          <p>
            Menerapkan pendekatan riset yang adaptif, sistematis, dan visioner. Saya menggabungkan fondasi teori 
            ekonomi Islam yang kuat dengan pemanfaatan metodologi modern serta perangkat teknologi data untuk 
            menghasilkan analisis yang cepat, akurat, dan relevan terhadap dinamika ekonomi masa depan.
          </p>
        </div>
      </div>
    </section>

    <section class="quote-section">
      <div class="quote-box">
        <p>
          “A personal website is not only a digital profile. It is a structured
          memory of learning, growth, projects, and identity.”
        </p>

        <div class="quote-author">
          <div class="quote-avatar">A</div>
          <div>
            <strong>Arva Athallah Susanto S.EI., M.SEI</strong>
            <span>Personal Academic Website</span>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <p class="arva-kicker">
        Connect
      </p>

      <h2>
        Begin the academic branding journey here.
      </h2>

      <p>
        Explore the profile, read selected writings, view portfolio works, or
        connect for future academic and creative collaboration.
      </p>

      <NuxtLink to="/contact" class="arva-btn primary">
        Contact Arva
      </NuxtLink>
    </section>
  </main>
</template>