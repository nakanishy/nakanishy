import * as React from 'react'
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
      <Heading>nakanishy</Heading>
      <P>I'm a designer / developer hybrid based in Japan.</P>
      <P>
        I'm passionate about creating apps that are beautiful and provide great
        user experiences.
      </P>
      <P>
        I have experience in UI/UX design, brand design, and frontend
        development throughout my freelance and startup career.
      </P>
      <P>
        When I'm not in development:
        <ul style={{ marginTop: space.l }}>
          <li>Doodle</li>
          <li>Read books (philosophy and psychology especially)</li>
          <li>Play piano</li>
          <li>Spend time in nature</li>
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
  lineHeight: 2,
  [media.sp]: {
    fontSize: fontSize.xl,
  },
}))
