import { animated, useSpring } from '@react-spring/web'
import * as React from 'react'
import styled from 'styled-components'

import { Work } from '~/data/works'
import * as vars from '~/styles/variables'

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
  // const overlayStyles = useSpring({
  //   opacity: hovered ? 1 : 0,
  //   config: {
  //     tension: 500,
  //   },
  // })
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
      {/* <WorkOverlay style={overlayStyles}>
        <h2
          style={{
            color: '#fff',
            fontSize: vars.fontSize.xxl,
          }}
        >
          {work.name}
        </h2>
      </WorkOverlay> */}
    </Container>
  )
}

const Container = styled(animated.div)({
  position: 'relative',
  borderRadius: vars.borderRadius.l,
  cursor: 'pointer',
  overflow: 'hidden',
})

// const WorkOverlay = styled(animated.div)({
//   position: 'absolute',
//   top: 0,
//   right: 0,
//   bottom: 0,
//   left: 0,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   flexDirection: 'column',
//   width: '100%',
//   height: '100%',
//   paddingTop: vars.space.m,
//   paddingRight: vars.space.m,
//   paddingBottom: vars.space.m,
//   paddingLeft: vars.space.m,
//   pointerEvents: 'none',
//   backgroundColor: 'rgba(0, 0, 0, 0.4)',
// })

const WorkImage = styled(animated.div)({
  paddingBottom: '62.5%',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
})
