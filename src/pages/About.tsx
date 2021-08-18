import * as React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { Inner } from '~/components/Inner'
import { SnsList } from '~/components/SnsList'
import {
  fontSize,
  fontWeight,
  lineHeight,
  media,
  space,
} from '~/styles/variables'

interface Props {}

export const About: React.FC<Props> = () => {
  return (
    <Inner
      style={{
        maxWidth: 900,
        paddingTop: space.l,
        paddingBottom: space.xl,
      }}
    >
      <Helmet title="About" />
      <Heading>nakanishy</Heading>
      <P>I'm a designer/developer hybrid based in Japan.</P>
      <P>
        I'm passionate about seeking "What is the essential UX/UI?".
        <br />
        Also, I love to design brands.
      </P>
      <P>
        I co-founded{' '}
        <a href="https://anyflow.jp" target="_blank" rel="noopener">
          Anyflow
        </a>{' '}
        in 2017, and have been working as a solo app creator since 2020. I have
        10+ years experience in frontend development and UX/UI design.
      </P>
      <P>
        When I'm not in development:
        <ul style={{ marginTop: space.l }}>
          <li>Play piano</li>
          <li>Spend time in nature</li>
          <li>Read books (philosophy and psychology especially)</li>
          <li>Doodle</li>
          <li>Daydream</li>
        </ul>
      </P>
      <SnsList style={{ marginTop: space.xl }} />
    </Inner>
  )
}

const Heading = styled('h2')({
  fontSize: fontSize.xxxxl,
  fontWeight: fontWeight.bold,
  lineHeight: lineHeight.heading,
})

const P = styled('p')((props) => ({
  marginTop: space.l,
  color: props.theme.fg1,
  fontSize: fontSize.xl,
  fontWeight: fontWeight.normal,
  lineHeight: lineHeight.body,
  [`@media ${media.sp}`]: {
    fontSize: fontSize.xl,
  },
}))
