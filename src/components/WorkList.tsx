import { animated, useTransition } from '@react-spring/web'
import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Work } from '~/data/works'
import * as vars from '~/styles/variables'

import { WorkItem } from './WorkItem'

interface Props {
  works: Work[]
  style?: React.CSSProperties
}

export const WorkList: React.FC<Props> = (props) => {
  const transition = useTransition(props.works, {
    keys: (item) => item.id,
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    trail: 100,
  })
  return (
    <Ul style={props.style}>
      {transition((styles, item) => (
        <Li style={styles}>
          <Link to={`/work/${item.id}`}>
            <WorkItem work={item} />
          </Link>
        </Li>
      ))}
    </Ul>
  )
}

const Ul = styled('ul')({
  display: 'grid',
  // TODO
  gridTemplateColumns: `repeat(12, minmax(0, 1fr))`,
  gridGap: vars.space.xl,
  width: '100%',
  listStyle: 'none',
  padding: 0,
  [`@media ${vars.media.tablet}`]: {
    display: 'flex',
    flexDirection: 'column',
    gridGap: vars.space.l,
  },
})

const Li = styled(animated.li)({
  gridColumn: 'span 6',
  [`@media ${vars.media.tablet}`]: {
    marginBottom: vars.space.m,
  },
})
