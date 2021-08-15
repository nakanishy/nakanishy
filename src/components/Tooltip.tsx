import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'

import * as vars from '~/styles/variables'

interface Props {
  children: React.ReactNode
  renderContent: () => React.ReactNode
  delay?: number
  className?: string
  tooltipClassName?: string
}

const Tooltip: React.FC<Props> = ({
  renderContent,
  children,
  className,
  tooltipClassName,
}) => {
  const [isShown, setIsShown] = React.useState(false)
  const [rect, setRect] = React.useState<ClientRect | DOMRect | null>(null)
  const targetRef = React.useRef<HTMLDivElement | null>(null)

  const tooltipProps = useSpring({
    to: async (next: any) => {
      if (isShown && rect !== null) {
        await next({
          display: 'block',
        })
        await next({ transform: 'translateY(0)', opacity: 1 })
      } else {
        await next({ display: 'none' })
        await next({
          transform: `translateY(-${vars.space.s}px)`,
          opacity: 0,
        })
      }
    },
    from: {
      opacity: 0,
      display: 'none',
      transform: `translateY(-${vars.space.m}px)`,
    },
    config: { tension: 500 },
  })

  const handleMouseEnter = React.useCallback(() => {
    if (targetRef && targetRef.current) {
      setRect(targetRef.current.getBoundingClientRect())
      setIsShown(true)
    }
  }, [])

  const handleMouseLeave = React.useCallback(() => {
    setRect(null)
    setIsShown(false)
  }, [])

  const target = document.getElementById('portal-root')
  if (!target) {
    return null
  }
  return (
    <>
      <Target
        ref={targetRef}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Target>
      {ReactDOM.createPortal(
        rect && (
          <TooltipContainer
            style={{
              top: rect.top + rect.height,
              left: rect.left,
              ...tooltipProps,
            }}
            className={tooltipClassName}
          >
            <Tip>{renderContent()}</Tip>
          </TooltipContainer>
        ),
        target
      )}
    </>
  )
}

const Target = styled('div')({
  display: 'inline-block',
  cursor: 'pointer',
})

const TooltipContainer = styled(animated.div)({
  position: 'fixed',
  maxWidth: 300,
  pointerEvents: 'none',
})

const Tip = styled('div')({}, (props) => ({
  paddingTop: vars.space.xs,
  paddingRight: vars.space.s,
  paddingBottom: vars.space.xs,
  paddingLeft: vars.space.s,
  color: props.theme.fontColor.inverted,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.bold,
  borderRadius: vars.borderRadius.s,
  backgroundColor: props.theme.tipBgColor,
  boxShadow: vars.shadow.m,
  transform: 'translateX(-12px)',
}))

export default Tooltip
