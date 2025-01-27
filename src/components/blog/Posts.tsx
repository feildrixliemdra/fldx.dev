import { getPosts } from '@/app/utils/utils'
import { Grid } from '@/once-ui/components'
import Post from './Post'
import { MediumPost } from '../../app/blog/page'

interface PostsProps {
  range?: [number] | [number, number]
  columns?: '1' | '2' | '3'
  thumbnail?: boolean
  posts: MediumPost[]
}

export function Posts({
  range,
  columns = '1',
  thumbnail = false,
  posts,
}: PostsProps) {
  // let allBlogs = getPosts(['src', 'app', 'blog', 'posts'])

  const sortedBlogs = posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const displayedBlogs = range
    ? sortedBlogs.slice(
        range[0] - 1,
        range.length === 2 ? range[1] : sortedBlogs.length
      )
    : sortedBlogs

  return (
    <>
      {displayedBlogs.length > 0 && (
        <Grid
          columns={columns}
          mobileColumns='1'
          fillWidth
          marginBottom='40'
          gap='m'
        >
          {displayedBlogs.map((post) => (
            <Post key={post.slug} post={post} thumbnail={thumbnail} />
          ))}
        </Grid>
      )}
    </>
  )
}
