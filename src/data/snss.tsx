import * as React from 'react'
import { GitHub, Twitter } from 'react-feather'

export interface Sns {
  url: string
  name: string
  Icon: React.ReactNode
}

export const snss: Sns[] = [
  {
    url: 'https://twitter.com/nakanishy',
    name: 'Twitter',
    Icon: <Twitter size={30} />,
  },
  {
    url: 'https://github.com/nakanishy',
    name: 'GitHub',
    Icon: <GitHub size={30} />,
  },
]
