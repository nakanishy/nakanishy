import { animated, useSpring } from '@react-spring/web'
import * as React from 'react'
import styled, { useTheme } from 'styled-components'

import { SnsList } from '~/components/SnsList'
import { UdemyList } from '~/components/UdemyList'
import { WorkList as WorkListComp } from '~/components/WorkList'
import { works } from '~/data/works'
import {
  fontSize,
  fontWeight,
  lineHeight,
  media,
  space,
} from '~/styles/variables'

import { Inner } from '../components/Inner'

export const Home: React.FC = () => {
  const theme = useTheme()
  const styles = useSpring({
    from: {
      opacity: 0,
      scale: 0.9,
      transform: 'translateY(20px)',
    },
    to: {
      opacity: 1,
      scale: 1,
      transform: 'translateY(0)',
    },
  })
  return (
    <>
      <Container>
        <div
          style={{
            height: 500,
          }}
        >
          <Section style={{ height: '100%' }}>
            <Inner
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <Name style={{ marginTop: '-10%', ...styles }}>nakanishy</Name>
              <Bio style={{ marginTop: space.m * 1.5, ...styles }}>
                Designer Developer Hybrid based in 🇯🇵
              </Bio>
              <animated.div style={styles}>
                <SnsList style={{ marginTop: space.l }} />
              </animated.div>
            </Inner>
          </Section>
        </div>
        <div
          style={{
            minHeight: '100%',
            paddingBottom: space.xl,
            backgroundColor: theme.bg1,
          }}
        >
          <Inner>
            <section>
              <UdemyList />
            </section>
            <section style={{ marginTop: space.xl }}>
              <WorkListComp works={works} />
            </section>
          </Inner>
        </div>
      </Container>
    </>
  )
}

const Section = styled('section')((props) => ({
  backgroundColor: props.theme.bg1,
}))

const Container = styled('div')((props) => ({
  backgroundColor: props.theme.bg1,
  transition: 'background-color 200ms ease-in-out',
}))

const Name = styled(animated.h1)((props) => ({
  color: props.theme.fg1,
  fontSize: fontSize.xxxxxl,
  fontWeight: fontWeight.bold,
  textAlign: 'center',
  lineHeight: lineHeight.heading,
  [`@media ${media.sp}`]: {
    fontSize: 60,
  },
}))

const Bio = styled(animated.p)((props) => ({
  maxWidth: 700,
  color: props.theme.fg1,
  fontSize: fontSize.xxl,
  fontWeight: fontWeight.normal,
  textAlign: 'center',
  lineHeight: 1.6,
}))
