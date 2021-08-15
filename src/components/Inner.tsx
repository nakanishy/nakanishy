import styled from 'styled-components'

import * as vars from '~/styles/variables'

export const Inner = styled('div')({
  marginRight: 'auto',
  marginLeft: 'auto',
  paddingRight: vars.space.xl,
  paddingLeft: vars.space.xl,
  width: '100%',
  maxWidth: 1400,
  height: '100%',
  [vars.media.sp]: {
    paddingRight: vars.space.m,
    paddingLeft: vars.space.m,
  },
})
