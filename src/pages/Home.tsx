import * as React from 'react'
import styled from 'styled-components'

import {
  fontSize,
  fontWeight,
  lineHeight,
  media,
  space,
} from '~/styles/variables'
export const Home: React.FC = () => {
  return (
    <>
      <Container>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: 1000,
            marginRight: 'auto',
            marginLeft: 'auto',
            height: '100%',
          }}
        >
          <Name>@nakanishy</Name>
          <Bio style={{ marginTop: space.m * 1.5 }}>Creator</Bio>
        </div>
      </Container>
    </>
  )
}

const Container = styled('div')((props) => ({
  height: '100%',
  backgroundColor: props.theme.bg1,
  transition: 'background-color 200ms ease-in-out',
}))

const Name = styled('h1')((props) => ({
  color: props.theme.fg1,
  fontSize: fontSize.xxxxxl,
  fontWeight: fontWeight.bold,
  textAlign: 'center',
  lineHeight: lineHeight.heading,
  [`@media ${media.sp}`]: {
    fontSize: 60,
  },
}))

const Bio = styled('p')((props) => ({
  maxWidth: 700,
  color: props.theme.fg1,
  fontSize: fontSize.xxl,
  fontWeight: fontWeight.normal,
  textAlign: 'center',
  lineHeight: 1.6,
}))
