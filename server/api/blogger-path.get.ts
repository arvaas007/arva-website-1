export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const path = String(query.path || '')

  if (!path) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Path artikel tidak ditemukan'
    })
  }

  const bloggerUrl = `https://extremeprogamer.blogspot.com${path}`

  const feedUrl =
    `https://extremeprogamer.blogspot.com/feeds/posts/default?alt=json&max-results=150`

  const data: any = await $fetch(feedUrl)

  const entries = data.feed.entry || []

  const matched = entries.find((entry: any) => {
    const alternate = entry.link?.find((link: any) => link.rel === 'alternate')?.href
    return alternate === bloggerUrl
  })

  if (!matched) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Artikel tidak ditemukan di Blogger'
    })
  }

  return {
    id: matched.id?.$t,
    title: matched.title?.$t,
    published: matched.published?.$t,
    updated: matched.updated?.$t,
    content: matched.content?.$t,
    url: matched.link?.find((link: any) => link.rel === 'alternate')?.href,
    labels: matched.category?.map((cat: any) => cat.term) || []
  }
})