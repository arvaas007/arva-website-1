export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const message = String(body.message || '').toLowerCase()

  const profileContext = `
  Arva Athallah Susanto is a graduate student in Islamic Economics.
  He focuses on Islamic Social Finance, ZISWAF, Financial Technology,
  Banking, ESG banking studies, research consulting, academic writing,
  and business development. He has experience as Research Consultant at
  Center of Islamic Social Finance and Research Assistant for Prof. Dr.
  Tika Widiastuti.
  `

  if (!message) {
    return {
      reply: 'Please type a question about Arva, portfolio, writings, or collaboration.'
    }
  }

  if (message.includes('portfolio')) {
    return {
      reply: 'Arva’s portfolio focuses on Islamic Economics, research consulting, Islamic Social Finance, ESG banking studies, FinTech, and digital academic identity.'
    }
  }

  if (message.includes('research') || message.includes('riset')) {
    return {
      reply: 'Arva is active in research related to Islamic Social Finance, ZISWAF, ESG banking, financial technology, and Islamic economics.'
    }
  }

  if (message.includes('contact') || message.includes('email')) {
    return {
      reply: 'You can contact Arva through email at arvaathallah@gmail.com or through the contact form on this page.'
    }
  }

  if (message.includes('writings') || message.includes('artikel')) {
    return {
      reply: 'You can open the Writings page to read selected writings connected from Blogger as the backend content source.'
    }
  }

  return {
    reply:
      'Based on Arva’s profile, he is focused on Islamic Economics, research consulting, Islamic Social Finance, ESG banking, FinTech, and academic development. You can ask about his portfolio, writings, research focus, or collaboration opportunities.'
  }
})