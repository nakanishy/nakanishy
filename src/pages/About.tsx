import * as React from 'react'

import { Heading } from '~/components/Heading'
import { Inner } from '~/components/Inner'
import { OuterLink } from '~/components/OuterLink'
import { P } from '~/components/P'
import { SnsList } from '~/components/SnsList'
import { useTheme } from '~/theme'
import * as vars from '~/styles/variables'

interface Props {
  isDarkMode: boolean
}

export const About: React.FC<Props> = (props) => {
  const theme = useTheme(props.isDarkMode)
  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
      }}
    >
      <Inner
        style={{
          maxWidth: 1000,
          paddingTop: vars.space.l,
          paddingBottom: vars.space.xl,
        }}
      >
        <Heading>About @nakanishy</Heading>
        <P style={{ marginTop: vars.space.xl }}>
          I'm a designer & developer based in Japan.
        </P>
        <P>I was born in 1994 and grew up with computers.</P>
        <P>
          I've loved beautiful things. The beauty is not just something looks
          good, but also something that is essential and has the way it should
          be.
        </P>
        <P>I have 10+ years of experience in design and development.</P>
        <P>
          I worked at CyberAgent Inc. for a year and co-founded{' '}
          <OuterLink
            href="https://anyflow.co.jp"
            title="Anyflow"
            target="_blank"
            rel="nofollow noopener"
          >
            Anyflow Inc.
          </OuterLink>{' '}
          in 2017. Now, I've worked as a freelancer since July 2020.
        </P>
        <P>
          When I'm not in development, I
          <ul style={{ marginTop: vars.space.l }}>
            <li>Read books, especially philosophy and psychology.</li>
            <li>Play piano and guitar.</li>
            <li>Spend time in nature.</li>
          </ul>
        </P>
        <P>Contact: nakanishy@yahoo.com</P>
        <SnsList style={{ marginTop: vars.space.l }} />
      </Inner>
    </div>
  )
}
