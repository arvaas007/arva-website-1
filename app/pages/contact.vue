<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const questions = [
  {
    q: 'What is Arva’s main academic focus?',
    a: 'Arva focuses on Islamic Economics, Islamic Social Finance, ZISWAF research, ESG banking studies, Financial Technology, and research consulting.'
  },
  {
    q: 'Can I collaborate with Arva on research?',
    a: 'Yes. You can contact Arva for research collaboration, Islamic economics projects, academic writing, and financial innovation topics.'
  },
  {
    q: 'Where can I read Arva’s writings?',
    a: 'You can open the Writings page to read selected articles connected from Blogger as the content backend.'
  },
  {
    q: 'What is the relation with Extreme Pro Gamer?',
    a: 'Extreme Pro Gamer is preserved as a legacy archive, while this website focuses on Arva’s academic and professional identity.'
  }
]

const activeQuestion = ref<number | null>(0)
function toggleQuestion(index: number) {
  activeQuestion.value = activeQuestion.value === index ? null : index
}
const chatOpen = ref(false)
const chatInput = ref('')
const chatLoading = ref(false)

const chatMessages = ref([
  {
    role: 'assistant',
    text: 'Hi, I am Arva AI Assistant. Ask me about Arva’s profile, portfolio, research focus, writings, or collaboration opportunities.'
  }
])

async function askAssistant() {
  if (!chatInput.value.trim()) return

  const userMessage = chatInput.value

  chatMessages.value.push({
    role: 'user',
    text: userMessage
  })

  chatInput.value = ''
  chatLoading.value = true

  try {
    const response: any = await $fetch('/api/chat', {
      method: 'POST',
      body: {
        message: userMessage
      }
    })

    chatMessages.value.push({
      role: 'assistant',
      text: response.reply
    })
  } catch (error) {
    chatMessages.value.push({
      role: 'assistant',
      text: 'Sorry, the AI assistant is not connected yet. Please try again later or contact Arva directly by email.'
    })
  } finally {
    chatLoading.value = false
  }
}

function submitContact() {
  alert('Contact form dummy berhasil diklik. Nanti bisa dihubungkan ke EmailJS, Formspree, atau backend sendiri.')
}
</script>

<template>
  <main class="contact-luxe-page">
    <section class="contact-hero">
      <div class="contact-hero-copy">
        <p class="contact-kicker">
          Contact
        </p>

        <h1>
          Let’s connect for academic, research, and professional collaboration.
        </h1>

        <p>
          Reach out for Islamic Economics research, Islamic Social Finance
          projects, academic writing, financial technology, ESG banking studies,
          or portfolio collaboration opportunities.
        </p>

        <div class="contact-hero-tags">
          <span>Research Collaboration</span>
          <span>Islamic Economics</span>
          <span>Academic Writing</span>
          <span>FinTech & Banking</span>
        </div>
      </div>

      <aside class="contact-profile-card">
        <div class="contact-avatar">A</div>

        <h2>Arva Athallah Susanto S.EI., M.SEI</h2>

        <p>
          Research Consultant · Islamic Economics · Islamic Social Finance ·
          ESG Banking · Financial Technology
        </p>

        <div class="contact-info-list">
          <a href="mailto:arvaathallah@gmail.com">
            arvaathallah@gmail.com
          </a>

          <a href="https://www.linkedin.com/in/arva-athallah-s" target="_blank">
            LinkedIn Profile
          </a>

          <span>Sidoarjo / Surabaya, Indonesia</span>
        </div>
      </aside>
    </section>

    <section class="contact-main-grid">
      <section class="contact-form-card">
        <p class="contact-kicker">
          Send Message
        </p>

        <h2>
          Start a conversation.
        </h2>

        <form @submit.prevent="submitContact" class="contact-form">
          <div class="form-row">
            <label>
              Name
              <input v-model="form.name" type="text" placeholder="Your name" />
            </label>

            <label>
              Email
              <input v-model="form.email" type="email" placeholder="your@email.com" />
            </label>
          </div>

          <label>
            Subject
            <input v-model="form.subject" type="text" placeholder="Collaboration, research, or inquiry" />
          </label>

          <label>
            Message
            <textarea v-model="form.message" rows="6" placeholder="Write your message here..." />
          </label>

          <button type="submit">
            Send Message →
          </button>
        </form>
      </section>

      <section class="contact-faq-card">
        <p class="contact-kicker">
          Quick Questions
        </p>

        <h2>
          Frequently asked questions.
        </h2>

        <div class="faq-list">
          <article
            v-for="(item, index) in questions"
            :key="item.q"
            class="faq-item"
          >
            <button
  type="button"
  @click="toggleQuestion(index)"
>
  <span>{{ item.q }}</span>
  <strong>{{ activeQuestion === index ? '−' : '+' }}</strong>
</button>

            <p v-if="activeQuestion === index">
              {{ item.a }}
            </p>
          </article>
        </div>
      </section>
    </section>

    <section class="contact-ai-section">
      <div>
        <p class="contact-kicker">
          Ask AI
        </p>

        <h2>
          Need quick guidance? Ask Arva AI Assistant.
        </h2>

        <p>
          This AI-style assistant is designed to answer questions about Arva’s
          profile, portfolio, writings, research interests, and collaboration
          opportunities.
        </p>
      </div>

      <button class="open-chat-btn" @click="chatOpen = true">
        Ask Arva AI →
      </button>
    </section>

    <div v-if="chatOpen" class="chatbot-overlay">
      <div class="chatbot-panel">
        <div class="chatbot-header">
          <div>
            <p>Arva AI Assistant</p>
            <span>Academic profile chatbot</span>
          </div>

          <button @click="chatOpen = false">
            ×
          </button>
        </div>

        <div class="chatbot-body">
          <div
            v-for="(message, index) in chatMessages"
            :key="index"
            class="chat-message"
            :class="message.role"
          >
            {{ message.text }}
          </div>

          <div v-if="chatLoading" class="chat-message assistant">
            Thinking...
          </div>
        </div>

        <form class="chatbot-input" @submit.prevent="askAssistant">
          <input
            v-model="chatInput"
            type="text"
            placeholder="Ask about Arva, portfolio, writings..."
          />

          <button type="submit">
            Send
          </button>
        </form>
      </div>
    </div>

    <button class="floating-ai-btn" @click="chatOpen = true">
      Ask AI
    </button>
  </main>
</template>