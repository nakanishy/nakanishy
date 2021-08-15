import * as React from 'react'
import Zoom from 'react-medium-image-zoom'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import Button from '~/components/Button'
import { Heading } from '~/components/Heading'
import { Inner } from '~/components/Inner'
import { Work, works } from '~/data/works'
import * as vars from '~/styles/variables'
import { useTheme } from '~/theme'

interface Props {}

export const WorkDetail: React.FC<Props> = (props) => {
  const params = useParams<{ workId: string }>()
  const theme = useTheme(props.isDarkMode)
  const work: Work | undefined = React.useMemo(() => {
    return works.find((it) => it.id === params.workId)
  }, [])

  if (work === undefined) {
    return (
      <Container>
        <Inner style={{ maxWidth: 1200 }}>
          <Heading>Not Found</Heading>
        </Inner>
      </Container>
    )
  }
  return (
    <Container>
      <Inner style={{ maxWidth: 1200 }}>
        <Title>{work.name}</Title>
        <Description>{work.description}</Description>
        <TagList>
          {work.tags.map((tag) => (
            <TagItem key={tag.name}>#{tag.name}</TagItem>
          ))}
        </TagList>
        <Button
          href={work.url}
          target="_blank"
          style={{
            marginTop: vars.space.l,
          }}
        >
          Visit
        </Button>
        {/* <H2>Role</H2>
        <ul style={{ color: theme.fontColor.primary }}>
          {work.roles.map((role) => (
            <li key={role.label}>{role.label}</li>
          ))}
        </ul>
        <H2>Duration</H2>
        <P>{work.duration}</P> */}
        <div style={{ marginTop: vars.space.xl }}>
          {work.images.map((imagePath, i) => (
            <div key={imagePath} style={{ marginTop: vars.space.l }}>
              <Zoom
                overlayBgColorStart={theme.backgroundColor}
                overlayBgColorEnd={theme.backgroundColor}
                zoomMargin={vars.space.l}
              >
                <img
                  src={imagePath}
                  alt={`${work.name} ui image ${i}`}
                  style={{ width: '100%' }}
                />
              </Zoom>
            </div>
          ))}
        </div>
      </Inner>
    </Container>
  )
}

const Container = styled('div')({}, (props) => ({
  minHeight: '100%',
  paddingBottom: vars.space.xl,
  backgroundColor: props.theme.backgroundColor,
}))

const Title = styled('h2')({}, (props) => ({
  margin: 0,
  color: props.theme.fontColor.primary,
  fontSize: vars.fontSize.xxxl,
}))

const TagList = styled('ul')({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: vars.space.m,
  paddingLeft: 0,
})

const TagItem = styled('li')({}, (props) => ({
  marginRight: vars.space.s,
  paddingRight: vars.space.m,
  paddingLeft: vars.space.m,
  listStyle: 'none',
  color: props.theme.fontColor.primary,
  fontSize: vars.fontSize.m,
  border: `1px solid #ddd`,
  borderRadius: vars.borderRadius.m,
  backgroundColor: props.theme.backgroundColor,
}))

const Description = styled('p')({}, (props) => ({
  color: props.theme.fontColor.primary,
  fontSize: vars.fontSize.l,
  fontWeight: vars.fontWeight.normal,
}))
