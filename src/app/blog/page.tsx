import { Column, Flex, Heading } from '@/once-ui/components'
import { Mailchimp } from '@/components'
import { Posts } from '@/components/blog/Posts'
import { baseURL } from '@/app/resources'
import { blog, person, newsletter } from '@/app/resources/content'
import Parser from 'rss-parser'

const parser = new Parser()
export type MediumPost = {
  title: string
  link: string
  content: string
  date: string
  thumbnail: string
  slug: string
}

export async function generateMetadata() {
  const title = blog.title
  const description = blog.description
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://${baseURL}/blog`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export async function getMediumPosts(): Promise<MediumPost[]> {
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
      thumbnail: thumbnail || '',
      slug,
    }
  })
}

export default async function Blog() {
  const posts = await getMediumPosts()

  return (
    <Column maxWidth='s'>
      <script
        type='application/ld+json'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            headline: blog.title,
            description: blog.description,
            url: `https://${baseURL}/blog`,
            image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
            author: {
              '@type': 'Person',
              name: person.name,
              image: {
                '@type': 'ImageObject',
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Heading marginBottom='l' variant='display-strong-s'>
        {blog.title}
      </Heading>
      <Column fillWidth flex={1}>
        <Posts posts={posts} range={[1, 3]} thumbnail />
        <Posts posts={posts} range={[4]} columns='2' />
      </Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  )
}
