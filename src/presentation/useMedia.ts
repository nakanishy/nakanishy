import * as React from 'react'

import { media } from '~/styles/variables'

export function useMedia(): 'pc' | 'narrowPc' | 'tablet' | 'sp' {
  const [currentMedia, setCurrentMedia] = React.useState<
    'pc' | 'narrowPc' | 'tablet' | 'sp'
  >(() => {
    if (window.matchMedia(media.sp).matches) {
      return 'sp'
    } else if (window.matchMedia(media.tablet).matches) {
      return 'tablet'
    } else if (window.matchMedia(media.narrowPc).matches) {
      return 'narrowPc'
    } else {
      return 'pc'
    }
  })
  React.useEffect(() => {
    function handler() {
      if (window.matchMedia(media.sp).matches) {
        setCurrentMedia('sp')
      } else if (window.matchMedia(media.tablet).matches) {
        setCurrentMedia('tablet')
      } else if (window.matchMedia(media.narrowPc).matches) {
        setCurrentMedia('narrowPc')
      } else {
        setCurrentMedia('pc')
      }
    }
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [])
  return currentMedia
}
