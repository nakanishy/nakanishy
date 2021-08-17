import { animated, useSpring } from '@react-spring/web'
import * as React from 'react'
import styled from 'styled-components'

import { Work } from '~/data/works'
import {
  borderRadius,
  fontSize,
  fontWeight,
  lineHeight,
  space,
} from '~/styles/variables'

interface Props {
  work: Work
}

export const WorkItem: React.FC<Props> = ({ work }) => {
  const [hovered, setIsHovered] = React.useState<boolean>(false)
  const containerStyles = useSpring({
    transform: hovered ? 'scale(0.96)' : 'scale(1)',
    config: {
      tension: 500,
    },
  })
  const overlayStyles = useSpring({
    opacity: hovered ? 1 : 0,
    config: {
      tension: 500,
    },
  })
  const titleStyles = useSpring({
    opacity: hovered ? 1 : 0,
    transform: hovered ? 'scale(1)' : 'scale(1.2)',
    config: {
      tension: 500,
    },
  })
  const timeStyles = useSpring({
    opacity: hovered ? 0.8 : 0,
    transform: hovered ? 'scale(1)' : 'scale(1.2)',
    config: {
      tension: 500,
    },
  })
  return (
    <Container
      key={work.id}
      style={containerStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <WorkImage
        style={{
          backgroundImage: `url(${work.thumbnail})`,
        }}
      />
      <WorkOverlay style={overlayStyles}>
        <animated.time
          style={{
            marginTop: -1 * space.l,
            display: 'block',
            color: 'white',
            fontSize: fontSize.m,
            fontWeight: fontWeight.bold,
            lineHeight: lineHeight.just,
            ...timeStyles,
          }}
        >
          {work.year}
        </animated.time>
        <animated.h2
          style={{
            marginTop: space.s,
            color: '#fff',
            fontSize: fontSize.xxxl,
            lineHeight: lineHeight.heading,
            ...titleStyles,
          }}
        >
          {work.name}
        </animated.h2>
      </WorkOverlay>
    </Container>
  )
}

const Container = styled(animated.div)({
  position: 'relative',
  borderRadius: borderRadius.l,
  cursor: 'pointer',
  overflow: 'hidden',
})

const WorkOverlay = styled(animated.div)((props) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  paddingTop: space.m,
  paddingRight: space.m,
  paddingBottom: space.m,
  paddingLeft: space.m,
  pointerEvents: 'none',
  backgroundColor: props.theme.theme + 'dd',
}))

const WorkImage = styled(animated.div)({
  paddingBottom: '62.5%',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
})
