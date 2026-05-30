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
            Researcher, Analyst, Academia
          </p>

          <h1 class="arva-hero-title">
            Arva Athallah Susanto S.EI., M.SEI
          </h1>

          <p class="arva-hero-subtitle">
            Academic Portfolio and Research Database
          </p>

          <p class="arva-hero-desc">
            A pathway towards Indonesia Emas 2045, a personal academic website for profile building, intellectual growth, portfolio documentation, reflective writings, and academic development.
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
    <h2>Academic Journey</h2>

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

          <a href="https://www.instagram.com/arva_as" target="_blank" rel="noopener noreferrer" class="arva-text-link">
  Follow me on Instagram →
</a>
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

          <NuxtLink to="/hall-of-fame" class="arva-text-link">
  Hall of Fame →
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
      <section class="web3-motion-break">
  <div class="web3-grid"></div>

  <div class="web3-orb orb-1"></div>
  <div class="web3-orb orb-2"></div>
  <div class="web3-orb orb-3"></div>

  <div class="web3-node node-a"></div>
  <div class="web3-node node-b"></div>
  <div class="web3-node node-c"></div>
  <div class="web3-node node-d"></div>
  <div class="web3-node node-e"></div>

  <div class="web3-line line-a"></div>
  <div class="web3-line line-b"></div>
  <div class="web3-line line-c"></div>
  <div class="web3-line line-d"></div>

  <div class="web3-floating-card card-a">
    <span>Islamic Values</span>
    <strong>Aim to liberate Palestine</strong>
  </div>

  <div class="web3-floating-card card-b">
    <span>Moderate Values</span>
    <strong>Becaming Moslem without lose modernity</strong>
  </div>

  <div class="web3-floating-card card-c">
    <span>Academic Oriented</span>
    <strong>Long-life learner</strong>
  </div>
</section>
<section class="arva-section app-access-section">
  <div class="section-heading-center">
    <p class="arva-kicker">
      Digital Applications
    </p>

    <h2>
      Access Arva’s academic digital tools.
    </h2>

    <p>
      Website ini tidak hanya berfungsi sebagai profil akademik, tetapi juga
      menyediakan akses menuju aplikasi pendukung untuk eksplorasi identitas
      digital, riset, dan pengembangan kajian ilmiah buatan Arva Athallah Susanto.
    </p>
  </div>

  <div class="program-grid app-access-grid">
    <div class="program-card featured app-card">
      <span class="program-label">Application</span>

      <p class="program-number">01</p>

      <h3>Arverse</h3>

      <p>
        Arverse merupakan aplikasi Qur'an digital yang berfungsi untuk setor murojaah harian
        dengan fitur gamifikasi berupa kartu yang dipilih secara acak dan menampilkan ayat
        tujuan.
      </p>

      <NuxtLink to="/arverse" class="arva-text-link">
        Open Arverse →
      </NuxtLink>
    </div>

    <div class="program-card app-card">
      <span class="program-label">Research Tool</span>

      <p class="program-number">02</p>

      <h3>SLR Application</h3>

      <p>
        SLR Application dirancang sebagai fitur pendukung untuk membantu proses
        pencarian, pengelolaan, dan dokumentasi artikel ilmiah dalam kajian
        Systematic Literature Review secara lebih terstruktur.
      </p>

      <NuxtLink to="/slr" class="arva-text-link">
        Open SLR App →
      </NuxtLink>
    </div>
  </div>
</section>
      
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
          <h3>Database Research</h3>
          <p>
            Website ini dilengkapi dengan database research personal yang terintegrasi
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
<section class="podcast-showcase">
  <div class="podcast-glow glow-one"></div>
  <div class="podcast-glow glow-two"></div>

  <div class="podcast-inner">
    <div class="podcast-heading">
      <p class="arva-kicker">
        Media Appearance
      </p>

      <h2>
        Arva's Podcast.
      </h2>

      <p>
        Dokumentasi ini menampilkan keberanian Arva dalam menyampaikan gagasan,
        berdiskusi, dan membangun identitas akademik di ruang digital publik.
        Podcast menjadi media untuk memperlihatkan kemampuan komunikasi,
        pemikiran kritis, dan personal branding yang lebih hidup.
      </p>
    </div>

    <div class="podcast-menu-grid">
  <a
    href="https://www.youtube.com/watch?v=T6uLNdJ0b5U&t=989s"
    target="_blank"
    rel="noopener noreferrer"
    class="podcast-menu-card podcast-video-card main-podcast"
  >
    <iframe
      class="podcast-bg-video"
      src="https://www.youtube.com/embed/T6uLNdJ0b5U?start=989&autoplay=1&mute=1&loop=1&playlist=T6uLNdJ0b5U&controls=0&modestbranding=1&rel=0&playsinline=1"
      title="Arva Podcast 01"
      frameborder="0"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen
    ></iframe>

    <div class="podcast-video-overlay"></div>

    <div class="podcast-card-top">
      <span class="podcast-badge">Podcast 01</span>
      <span class="podcast-play">▶</span>
    </div>

    <div class="podcast-card-content">
      <h3>Arva Talks: Public Voice & Academic Confidence</h3>

      <p>
       Arva adalah sosok yang selalu aktif dalam diskusi publik, terutama di ranah akademik dan ekonomi Islam.
      </p>
    </div>

    <div class="podcast-card-footer">
      <span>Watch on YouTube</span>
      <strong>Open Episode →</strong>
    </div>
  </a>

  <a
    href="https://www.youtube.com/watch?v=cfPt7QD2ghA"
    target="_blank"
    rel="noopener noreferrer"
    class="podcast-menu-card podcast-video-card second-podcast"
  >
    <iframe
      class="podcast-bg-video"
      src="https://www.youtube.com/embed/cfPt7QD2ghA?autoplay=1&mute=1&loop=1&playlist=cfPt7QD2ghA&controls=0&modestbranding=1&rel=0&playsinline=1"
      title="Arva Podcast 02"
      frameborder="0"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen
    ></iframe>

    <div class="podcast-video-overlay"></div>

    <div class="podcast-card-top">
      <span class="podcast-badge">Podcast 02</span>
      <span class="podcast-play">▶</span>
    </div>

    <div class="podcast-card-content">
      <h3>Arva Perspective: Ideas, Identity, and Growth</h3>

      <p>
        Sebagai moderator Podcast bersama Wakil Rektor Institut Teknologi Sepuluh Nopember, Surabaya.
      </p>
    </div>

    <div class="podcast-card-footer">
      <span>Watch on YouTube</span>
      <strong>Open Episode →</strong>
    </div>
  </a>
</div>
</div>
</section>
<section class="quote-highlight-section">
  <div class="quote-highlight-bg"></div>

  <div class="quote-highlight-inner">
    <p class="quote-highlight-kicker">
      Personal Manifesto
    </p>

    <h2>
      “Jika Roma dan Konstantinopel dahulu ditaklukkan dengan darah dan air mata,
      maka bukan tidak mungkin dalam menyongsong kemerdekaan Palestina adalah
      dengan penguasaan ilmu dan teknologi terbarukan oleh kaum muslimin,
      insyaAllah.”
    </h2>

    <div class="quote-highlight-author">
      <span></span>
      <p>Arva Athallah Susanto S.EI., M.SEI</p>
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

      <a href="https://www.linkedin.com/in/arva-athallah-s/" target="_blank" rel="noopener noreferrer" class="arva-btn primary">
  Connect with Arva on LinkedIn
</a>
    </section>
  </main>
</template>