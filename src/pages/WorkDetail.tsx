import * as React from 'react'
import Zoom from 'react-medium-image-zoom'
import { useParams } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'

import { Inner } from '~/components/Inner'
import { Work, works } from '~/data/works'
import { borderRadius, fontSize, fontWeight, space } from '~/styles/variables'

interface Props {}

export const WorkDetail: React.FC<Props> = () => {
  const theme = useTheme()
  const params = useParams<{ workId: string }>()
  const work: Work | undefined = React.useMemo(() => {
    return works.find((it) => it.id === params.workId)
  }, [])

  if (work === undefined) {
    return (
      <Container>
        <Inner style={{ maxWidth: 1200 }}>
          <h1>Not Found</h1>
        </Inner>
      </Container>
    )
  }
  return (
    <Container>
      <Inner style={{ maxWidth: 1200 }}>
        <Title>{work.name}</Title>
        <Description>{work.description}</Description>
        {/* <Year>{work.year}</Year> */}
        <TagList>
          {work.tags.map((tag) => (
            <TagItem key={tag}>{tag}</TagItem>
          ))}
        </TagList>
        {work.url ? (
          !work.unavailable ? (
            <Button href={work.url} target="_blank" rel="noopener">
              View {work.name}
            </Button>
          ) : (
            <UnavailableButton>This site was closed</UnavailableButton>
          )
        ) : null}
        <div style={{ marginTop: space.xl }}>
          {work.images.map((imagePath, i) => (
            <div key={imagePath} style={{ marginTop: space.l }}>
              <Zoom
                overlayBgColorStart={theme.bg1}
                overlayBgColorEnd={theme.bg1}
                zoomMargin={space.l}
              >
                <img
                  src={imagePath}
                  alt={`${work.name} ${i + 1}`}
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

const Container = styled('div')({
  minHeight: '100%',
  paddingBottom: space.xl,
})

const Title = styled('h1')((props) => ({
  color: props.theme.fg1,
  fontSize: fontSize.xxxl,
}))

const TagList = styled('ul')({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: space.m,
  paddingLeft: 0,
})

const TagItem = styled('li')((props) => ({
  marginRight: space.s,
  paddingRight: space.m,
  paddingLeft: space.m,
  listStyle: 'none',
  color: props.theme.fg1,
  fontSize: fontSize.m,
  border: `1px solid ${props.theme.border}`,
  borderRadius: borderRadius.m,
  backgroundColor: props.theme.bg1,
}))

const Description = styled('p')((props) => ({
  marginTop: space.s,
  color: props.theme.fg1,
  fontSize: fontSize.l,
  fontWeight: fontWeight.normal,
}))

const Year = styled('p')((props) => ({
  marginTop: space.m,
  color: props.theme.fg1,
  fontSize: fontSize.l,
  fontWeight: fontWeight.normal,
}))

const Button = styled('a')((props) => ({
  marginTop: space.l,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingRight: space.m,
  paddingLeft: space.m,
  height: 40,
  minWidth: 120,
  color: '#fff',
  fontSize: fontSize.s,
  fontWeight: fontWeight.normal,
  textDecoration: 'none',
  borderRadius: borderRadius.m,
  backgroundColor: props.theme.theme,
}))

const UnavailableButton = styled('div')((props) => ({
  marginTop: space.l,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingRight: space.m,
  paddingLeft: space.m,
  height: 40,
  minWidth: 120,
  color: '#fff',
  fontSize: fontSize.s,
  fontWeight: fontWeight.normal,
  textDecoration: 'none',
  borderRadius: borderRadius.m,
  cursor: 'not-allowed',
  backgroundColor: props.theme.bg3,
}))
