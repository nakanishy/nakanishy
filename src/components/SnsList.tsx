import * as React from 'react'
import styled from 'styled-components'

import Tooltip from '~/components/Tooltip'
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
          <Tooltip renderContent={() => sns.name}>
            <SnsIconLink href={sns.url} target="_blank" title={sns.name}>
              {sns.Icon}
            </SnsIconLink>
          </Tooltip>
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

const SnsIconLink = styled('a')({}, (props) => ({
  color: props.theme.fontColor.primary,
  textDecoration: 'none',
}))
