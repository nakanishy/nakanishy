import { animated, useChain, useSpring } from '@react-spring/web'
import * as React from 'react'
import styled from 'styled-components'

import { height as headerHeight } from '~/components/Header'
import { SnsList } from '~/components/SnsList'
import * as vars from '~/styles/variables'

import { Inner } from '../components/Inner'

const styles = {
  from: {
    opacity: 0,
    transform: 'translateY(20px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
}

export const Home: React.FC = () => {
  const nameRef = React.useRef(null)
  const nameStyles = useSpring({ ...styles, ref: nameRef })
  const usernameRef = React.useRef(null)
  const bioRef = React.useRef(null)
  const bioStyles = useSpring({ ...styles, ref: bioRef })
  const snsRef = React.useRef(null)
  const snsStyles = useSpring({ ...styles, ref: snsRef })
  useChain([nameRef, usernameRef, bioRef, snsRef], [0, 0.1, 0.2, 0.3])
  return (
    <>
      <Container>
        <div
          style={{
            height: `calc(100vh - ${headerHeight}px)`,
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
              <Name style={{ marginTop: '-10%', ...nameStyles }}>
                nakanishy
              </Name>
              <Bio style={{ marginTop: vars.space.m * 1.5, ...bioStyles }}>
                Designer / Developer
              </Bio>
              <animated.div style={snsStyles}>
                <SnsList style={{ marginTop: vars.space.l }} />
              </animated.div>
            </Inner>
          </Section>
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

const Name = styled(animated.h1)(
  {
    margin: 0,
    fontSize: vars.fontSize.xxxxl,
    fontWeight: vars.fontWeight.bold,
    textAlign: 'center',
    lineHeight: 1.2,
    [vars.media.sp]: {
      fontSize: 60,
    },
  },
  (props) => ({
    color: props.theme.fontColor.primary,
  })
)

const Bio = styled(animated.p)({}, (props) => ({
  maxWidth: 700,
  color: props.theme.fontColor.primary,
  fontSize: 26,
  fontWeight: vars.fontWeight.normal,
  textAlign: 'center',
  lineHeight: 1.8,
}))
