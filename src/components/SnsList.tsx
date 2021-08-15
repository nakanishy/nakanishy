import * as React from 'react'
import styled from 'styled-components'

import { snss } from '~/data/snss'
import * as vars from '~/styles/variables'

interface Props {
  style?: React.CSSProperties
}

export const SnsList: React.FC<Props> = ({ style }) => {
  return (
    <ul
      style={{
        display: 'flex',
        alignItems: 'center',
        listStyle: 'none',
        padding: 0,
        ...style,
      }}
    >
      {snss.map((sns) => (
        <SnsItem key={sns.url}>
          <SnsIconLink href={sns.url} target="_blank" title={sns.name}>
            {sns.Icon}
          </SnsIconLink>
        </SnsItem>
      ))}
    </ul>
  )
}

const SnsItem = styled('li')({
  marginLeft: vars.space.m,
  '&:first-of-type': {
    marginLeft: 0,
  },
})

const SnsIconLink = styled('a')((props) => ({
  color: props.theme.fg1,
  textDecoration: 'none',
}))
