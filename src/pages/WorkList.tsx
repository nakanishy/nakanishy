import * as React from 'react'
import { useTheme } from 'styled-components'

import { Inner } from '~/components/Inner'
import { WorkList as WorkListComp } from '~/components/WorkList'
import { works } from '~/data/works'
import * as vars from '~/styles/variables'

interface Props {}

export const WorkList: React.FC<Props> = () => {
  const theme = useTheme()
  return (
    <div
      style={{
        minHeight: '100%',
        paddingBottom: vars.space.xl,
        backgroundColor: theme.bg1,
      }}
    >
      <Inner>
        <WorkListComp works={works} />
      </Inner>
    </div>
  )
}
