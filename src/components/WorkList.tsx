import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Work } from '~/data/works'
import * as vars from '~/styles/variables'

import { WorkItem } from './WorkItem'

interface Props {
  works: Work[]
}

export const WorkList: React.FC<Props> = (props) => {
  return (
    <Ul>
      {props.works.map((work) => (
        <Li key={work.id}>
          <Link to={`/works/${work.id}`}>
            <WorkItem work={work} />
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
  [vars.media.tablet]: {
    display: 'flex',
    flexDirection: 'column',
    gridGap: vars.space.l,
  },
})

const Li = styled('li')({
  gridColumn: 'span 4',
  '@media (max-width: 1200px)': {
    gridColumn: 'span 6',
  },
  [vars.media.tablet]: {
    marginBottom: vars.space.m,
  },
})
