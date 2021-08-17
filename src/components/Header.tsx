import { animated, useSpring } from '@react-spring/web'
import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'

import { Inner } from '~/components/Inner'
import { fontSize, media, space } from '~/styles/variables'

export const height = 150

interface Props {}

const styles = {
  from: {
    opacity: 0,
    transform: 'translateY(-30px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
}

export const Header: React.FC<Props> = () => {
  const theme = useTheme()
  const headerStyles = useSpring(styles)
  const [isSp, setIsSp] = React.useState(
    window.matchMedia('(min-width: 550px)').matches
  )

  React.useEffect(() => {
    const handleResize = () => {
      setIsSp(window.matchMedia('(min-width: 550px)').matches)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header style={{ backgroundColor: theme.bg1 }}>
      <animated.div style={headerStyles}>
        <Inner
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height,
          }}
        >
          <Link to="/">
            <Avatar
              src={'/static/images/nakanishy.svg'}
              alt="nakanishy"
              width={40}
              height={40}
            />
          </Link>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <nav>
              <NavList>
                {isSp && (
                  <NavItem>
                    <_NavLink
                      to="/"
                      exact={true}
                      activeStyle={{ color: theme.theme }}
                    >
                      Work
                    </_NavLink>
                  </NavItem>
                )}
                <NavItem>
                  <_NavLink to="/about" activeStyle={{ color: theme.theme }}>
                    About
                  </_NavLink>
                </NavItem>
              </NavList>
            </nav>
            {/* <ThemeChangeButton
              title={
                props.isDarkMode
                  ? 'Switch to light theme'
                  : 'Switch to dark theme'
              }
              onClick={() => props.onThemeChange(!props.isDarkMode)}
            >
              {props.isDarkMode ? (
                <Sun color={theme.fg1} size={26} />
              ) : (
                <Moon color={theme.fg1} size={26} />
              )}
            </ThemeChangeButton> */}
          </div>
        </Inner>
      </animated.div>
    </header>
  )
}

const Avatar = styled('img')({
  display: 'block',
  marginRight: space.m,
  [media.sp]: {
    marginRight: space.s,
  },
})

// const ThemeChangeButton = styled('div')({}, () => ({
//   marginLeft: space.m,
//   padding: space.s,
//   cursor: 'pointer',
//   lineHeight: 1,
//   '&:hover': {
//     opacity: 0.6,
//   },
//   [media.sp]: {
//     marginLeft: space.s,
//   },
// }))

const NavList = styled('ul')({
  display: 'flex',
  alignItems: 'center',
  padding: 0,
  listStyle: 'none',
})

const NavItem = styled('li')({})

const _NavLink = styled(NavLink)((props) => ({
  display: 'block',
  paddingTop: space.m,
  paddingBottom: space.m,
  paddingRight: space.m,
  paddingLeft: space.m,
  color: props.theme.fg1,
  fontSize: fontSize.l,
  textDecoration: 'none',
  '&:hover': {
    opacity: 0.6,
  },
  [`@media ${media.sp}`]: {
    paddingRight: space.s,
    paddingLeft: space.s,
  },
}))
