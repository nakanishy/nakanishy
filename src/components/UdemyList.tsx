import { animated, useTransition } from '@react-spring/web'
import * as React from 'react'
import styled from 'styled-components'

import {
  borderRadius,
  fontSize,
  fontWeight,
  lineHeight,
  media,
  space,
} from '~/styles/variables'

const courses = [
  {
    title: 'React: 手を動かしながらアニメーションを学ぼう（react-spring）',
    url:
      'https://www.udemy.com/course/react-spring/?referralCode=FEA6048FEB4DCFB4100D',
    thumbnailUrl: '/images/udemy/react-spring.png',
  },
]

export const UdemyList: React.FC = () => {
  const transition = useTransition(courses, {
    keys: (item) => item.title,
    from: {
      opacity: 0,
      scale: 0.9,
      transform: 'translateY(20px)',
    },
    enter: () => async (next) => {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve('')
        }, 250)
      })
      await next({
        opacity: 1,
        scale: 1,
        transform: 'translateY(0)',
      })
    },
  })
  return (
    <>
      {transition((styles, item) => (
        <A style={styles} href={item.url} target="_blank">
          <Image src={item.thumbnailUrl} alt={item.title} />
          <TextContainer>
            <Title>{item.title}</Title>
            <Description>
              react-spring をつかって、React のアニメーション実装を学ぶ Udemy
              のコース
            </Description>
          </TextContainer>
        </A>
      ))}
    </>
  )
}

const A = styled(animated.a)((props) => ({
  display: 'flex',
  alignItems: 'center',
  padding: space.l,
  width: '100%',
  textDecoration: 'none',
  overflow: 'hidden',
  borderRadius: borderRadius.l,
  backgroundColor: props.theme.bg2,
  [`@media ${media.tablet}`]: {
    flexDirection: 'column',
  },
}))

const Image = styled('img')((props) => ({
  display: 'block',
  maxWidth: 300,
  border: `1px solid ${props.theme.border}`,
  borderRadius: borderRadius.l,
  [`@media ${media.tablet}`]: {
    width: '100%',
    maxWidth: 'auto',
  },
}))
const TextContainer = styled('div')({
  marginLeft: space.l,
  [`@media ${media.tablet}`]: {
    marginLeft: 0,
    marginTop: space.m,
  },
})

const Title = styled('h1')((props) => ({
  color: props.theme.fg1,
  fontSize: fontSize.l,
  fontWeight: fontWeight.bold,
  lineHeight: lineHeight.heading,
}))

const Description = styled('p')((props) => ({
  marginTop: space.s,
  color: props.theme.fg2,
  fontSize: fontSize.s,
  lineHeight: lineHeight.heading,
}))
