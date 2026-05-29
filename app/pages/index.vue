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
            Arva Athallah Susanto
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
            <NuxtLink to="/about" class="arva-btn primary">
              About Arva
            </NuxtLink>

            <NuxtLink to="/portfolio" class="arva-btn secondary">
              View Portfolio
            </NuxtLink>
          </div>
        </div>

        <div class="arva-hero-panel">
          <div class="panel-orbit">
            <div class="orbit-core">A</div>
            <span class="orbit-dot dot-a"></span>
            <span class="orbit-dot dot-b"></span>
            <span class="orbit-dot dot-c"></span>
          </div>

          <h2>Academic Digital Identity</h2>

          <p>
            A curated space for profile building, intellectual growth,
            portfolio documentation, reflective writings, and academic
            development.
          </p>
        </div>
      </div>
    </section>

    <section class="number-section">
      <div class="number-grid">
        <div class="number-card">
          <h3>5</h3>
          <p>Main academic identity sections</p>
        </div>

        <div class="number-card">
          <h3>3</h3>
          <p>Core focus areas: profile, portfolio, and writings</p>
        </div>

        <div class="number-card">
          <h3>1</h3>
          <p>Integrated personal academic platform</p>
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
            About
          </p>

          <h2>
            From digital archive to academic personal branding.
          </h2>
        </div>

        <div>
          <p>
            Website ini dirancang sebagai ruang akademik personal yang lebih
            matang. Identitas utama diarahkan pada profil, portofolio, tulisan,
            project, dan dokumentasi perkembangan diri Arva Athallah Susanto.
            Konten lama tetap dapat diakses melalui archive shortcut, tetapi
            tidak lagi menjadi tampilan utama website.
          </p>

          <NuxtLink to="/about" class="arva-text-link">
            Read more about Arva →
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

          <NuxtLink to="/about" class="arva-text-link">
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
          <h3>Academic First</h3>
          <p>
            Tampilan dan struktur diarahkan untuk membangun kesan intelektual,
            rapi, kredibel, dan profesional.
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
          <h3>Portfolio Driven</h3>
          <p>
            Website diarahkan untuk menampilkan karya, proses belajar, project,
            dan perkembangan kompetensi.
          </p>
        </div>

        <div class="principle-item">
          <span>04 —</span>
          <h3>Scalable System</h3>
          <p>
            Blogger tetap menjadi backend konten, sementara Nuxt dan Vercel
            memberi kebebasan desain dan pengembangan UI/UX.
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
            <strong>Arva Athallah Susanto</strong>
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

    <a
      href="https://extremeprogamer.blogspot.com"
      target="_blank"
      rel="noopener noreferrer"
      class="archive-floating-btn"
    >
      View Archive
    </a>
  </main>
</template>