import Parser from 'rss-parser'
import { MediumPost } from '../app/blog/page'

const parser = new Parser()

const getMediumPosts = async () => {
  const feed = await parser.parseURL('https://medium.com/feed/@feildrixliemdra')

  return feed.items.map((item) => {
    console.log('title: ', item.title)

    const content = item['content:encoded'] || item.content || '' // HTML content
    const thumbnailMatch = content.match(/<img.*?src="(.*?)"/) // Match the first image tag
    const thumbnail = thumbnailMatch ? thumbnailMatch[1] : null
    const slug = item.link?.split('/').pop() || '' // Extract slug from the URL

    return {
      title: item.title || '',
      link: item.link || '',
      content: item.contentSnippet || '',
      date: item.pubDate || '',
      thumbnail: (thumbnail as string) || '',
      slug,
    }
  })
}
export default getMediumPosts
