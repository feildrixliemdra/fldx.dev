'use client'

import {
  Column,
  Flex,
  Heading,
  SmartImage,
  SmartLink,
  Tag,
  Text,
} from '@/once-ui/components'
import styles from './Posts.module.scss'
import { formatDate } from '@/app/utils/formatDate'

interface PostProps {
  post: any
  thumbnail: boolean
}

export default function Post({ post, thumbnail }: PostProps) {
  return (
    <SmartLink
      fillWidth
      className={styles.hover}
      unstyled
      key={post.slug}
      href={post.link}
    >
      <Flex
        position='relative'
        mobileDirection='column'
        fillWidth
        paddingY='12'
        paddingX='16'
        gap='32'
      >
        {post.thumbnail && thumbnail && (
          <SmartImage
            priority
            maxWidth={20}
            className={styles.image}
            sizes='640px'
            border='neutral-alpha-weak'
            cursor='interactive'
            radius='m'
            src={post.thumbnail}
            alt={'Thumbnail of ' + post.title}
            aspectRatio='16 / 9'
          />
        )}
        <Column position='relative' fillWidth gap='8' vertical='center'>
          <Heading as='h2' variant='heading-strong-l' wrap='balance'>
            {post.title}
          </Heading>
          <Text variant='label-default-s' onBackground='neutral-weak'>
            {formatDate(post.date, false)}
          </Text>
          {post.tag && (
            <Tag className='mt-8' label={post.tag} variant='neutral' />
          )}
        </Column>
      </Flex>
    </SmartLink>
  )
}
