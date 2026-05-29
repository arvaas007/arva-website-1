export default defineEventHandler(async () => {
  const url =
    'https://extremeprogamer.blogspot.com/feeds/posts/default?alt=json&max-results=10'

  const data: any = await $fetch(url)

  const posts = data.feed.entry?.map((entry: any) => {
    return {
      id: entry.id?.$t,
      title: entry.title?.$t,
      published: entry.published?.$t,
      updated: entry.updated?.$t,
      content: entry.content?.$t,
      url: entry.link?.find((link: any) => link.rel === 'alternate')?.href,
      labels: entry.category?.map((cat: any) => cat.term) || []
    }
  }) || []

  return {
    posts
  }
})