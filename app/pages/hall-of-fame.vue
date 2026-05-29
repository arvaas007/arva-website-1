<template>
  <main class="hof-container">
    <header class="hof-header">
      <h1>Hall of Fame</h1>
      <p>Dokumentasi perjalanan akademik, prestasi, dan milestone penting yang diabadikan langsung dari catatan portofolio digital saya.</p>
    </header>

    <!-- Navigasi Filter Kategori -->
    <div class="hof-filters">
      <button 
        v-for="category in categories" 
        :key="category"
        :class="{ active: currentFilter === category }"
        @click="currentFilter = category"
      >
        {{ category }}
      </button>
    </div>

    <!-- Daftar Postingan Bergaya Feed Instagram Premium -->
    <section class="hof-feed">
      <article 
        v-for="(post, index) in filteredPosts" 
        :key="index" 
        class="feed-card"
      >
        <!-- Header Postingan (Model Akun) -->
        <div class="feed-card-header">
          <div class="user-avatar">
            <!-- Representasi Inisial Nama Anda -->
            <span>AA</span> 
          </div>
          <div class="user-meta">
            <span class="user-name">Arva Athallah Susanto</span>
            <span :class="['post-badge', post.tag.toLowerCase().replace(' ', '-')]">{{ post.tag }}</span>
          </div>
        </div>

        <!-- Bagian Galeri Foto Portofolio (Bisa dikembangkan jadi Slider) -->
        <div class="feed-media-wrapper">
          <img :src="post.image" :alt="post.title" loading="lazy" />
        </div>

        <!-- Bagian Konten / Caption Feed (Dibaca Bebas Tanpa Login IG) -->
        <div class="feed-content">
          <h2 class="feed-post-title">{{ post.title }}</h2>
          <p class="feed-date">📅 {{ post.date }}</p>
          
          <!-- Deskripsi Naratif Panjang yang Diadopsi dari Caption Khas IG Berkualitas -->
          <div class="feed-caption">
            <p v-for="(paragraph, pIndex) in post.paragraphs" :key="pIndex">
              {{ paragraph }}
            </p>
          </div>
          
          <!-- Hastag Portofolio -->
          <p class="feed-tags">
            <span v-for="(hashtag, hIndex) in post.hashtags" :key="hIndex">
              #{{ hashtag }} 
            </span>
          </p>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      currentFilter: 'Semua',
      categories: ['Semua', 'S2', 'S1', 'Luar Negeri'],
      // Struktur Data yang diadaptasi penuh dari Feed Instagram Anda
      achievements: [
        {
          title: "Momen Wisuda Kelulusan Magister (S2)",
          date: "Juni 2024",
          tag: "S2",
          image: "/images/wisuda-s1.jpg", // Simpan foto wisuda Anda di folder public/images/wisuda-s1.jpg
          paragraphs: [
            "Tuntas sudah satu babak perjalanan awal. Menyelesaikan studi Strata 2 bukan sekadar tentang selembar ijazah atau pemindahan tali toga, melainkan sebuah pembuktian konsistensi, kerja keras, dan komitmen terhadap ilmu pengetahuan yang telah ditekuni selama ini.",
            "Setiap tantangan ruang kelas, diskusi kelompok, hingga malam-malam panjang menyelesaikan tugas akhir bermuara pada hari ini. Terima kasih yang tak terhingga kepada orang tua, dosen pembimbing, serta rekan-rekan perjuangan yang selalu menguatkan di kala langkah terasa berat.",
            "Ini bukan akhir dari pencarian ilmu, melainkan gerbang awal untuk melangkah lebih jauh, berdampak lebih luas, dan bersiap menyambut tantangan akademik berikutnya di jenjang yang lebih tinggi."
          ],
          hashtags: ["GraduationDay", "S1Graduation", "AlumniLife", "AcademicJourney", "PortofolioArva"]
        },
        {
          title: "Visiting Graduate Research Student - Dalhousie University",
          date: "Oktober 2025",
          tag: "Luar Negeri",
          image: "/images/canada-research.jpg", 
          paragraphs: [
            "Menapaki belahan bumi baru untuk mengeksplorasi cakrawala riset yang lebih luas. Berada di Dalhousie University (Truro Campus) melalui program Canada-ASEAN SEED memberikan perspektif baru tentang bagaimana riset global dikelola.",
            "Di bawah bimbingan supervisor dan ekosistem riset yang sangat suportif, fokus diarahkan pada integrasi keberlanjutan dan kebijakan finansial kontemporer. Belajar beradaptasi dengan kultur akademik internasional serta memperluas jejaring profesional.",
            "Setiap ruang laboratorium, perpustakaan, dan diskusi lintas budaya di sini menjadi bahan bakar berharga bagi pengembangan tesis magister saya."
          ],
          hashtags: ["CanadaASEAN", "SEEDProgram", "DalhousieUniversity", "ResearchStay", "IslamicFinance"]
        }
      ]
    }
  },
  computed: {
    filteredPosts() {
      if (this.currentFilter === 'Semua') {
        return this.achievements;
      }
      return this.achievements.filter(item => item.tag === this.currentFilter);
    }
  }
}
</script>

<style scoped>
.hof-container {
  max-width: 700px; /* Dipersempit agar menyerupai layout feed terpusat */
  margin: 0 auto;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: #fafafa;
}

.hof-header {
  text-align: center;
  margin-bottom: 35px;
}

.hof-header h1 {
  color: #262626;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 8px;
}

.hof-header p {
  color: #8e8e8e;
  font-size: 15px;
  line-height: 1.4;
}

/* Navigasi Filter Kategori */
.hof-filters {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 35px;
}

.hof-filters button {
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  color: #262626;
  transition: all 0.2s ease;
}

.hof-filters button:hover, 
.hof-filters button.active {
  background-color: #0095f6; /* Warna biru aksen interaktif bersih */
  color: #ffffff;
  border-color: #0095f6;
}

/* Desain Feed Card ala Instagram Bebas Login */
.hof-feed {
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.feed-card {
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  overflow: hidden;
}

/* Header Komponen Kartu */
.feed-card-header {
  display: flex;
  align-items: center;
  padding: 14px;
  border-bottom: 1px solid #efefef;
}

.user-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
}

.user-avatar span {
  color: #ffffff;
  font-weight: bold;
  font-size: 13px;
}

.user-meta {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.user-name {
  font-weight: 600;
  font-size: 14px;
  color: #262626;
}

.post-badge {
  align-self: flex-start;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 3px;
  color: #fff;
  margin-top: 2px;
}
.post-badge.s1 { background-color: #3182ce; }
.post-badge.s2 { background-color: #dd6b20; }
.post-badge.luar-negeri { background-color: #38a169; }

/* Pembungkus Gambar */
.feed-media-wrapper {
  width: 100%;
  background-color: #fafafa;
  border-bottom: 1px solid #efefef;
}

.feed-media-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  max-height: 600px;
  object-fit: contain;
}

/* Konten Teks */
.feed-content {
  padding: 16px;
}

.feed-post-title {
  font-size: 18px;
  font-weight: 700;
  color: #262626;
  margin: 0 0 4px 0;
}

.feed-date {
  font-size: 12px;
  color: #8e8e8e;
  margin: 0 0 15px 0;
}

.feed-caption {
  font-size: 14px;
  color: #262626;
  line-height: 1.5;
}

.feed-caption p {
  margin: 0 0 12px 0;
  text-align: justify;
}

.feed-caption p:last-child {
  margin-bottom: 0;
}

.feed-tags {
  font-size: 14px;
  color: #00376b; /* Biru tag link khas media sosial */
  margin-top: 10px;
  font-weight: 500;
}
</style>