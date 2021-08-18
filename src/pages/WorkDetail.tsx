import * as React from 'react'
import { ExternalLink } from 'react-feather'
import { Helmet } from 'react-helmet'
import Zoom from 'react-medium-image-zoom'
import { useParams } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'

import { Inner } from '~/components/Inner'
import { Work, works } from '~/data/works'
import { useMedia } from '~/presentation/useMedia'
import {
  borderRadius,
  fontSize,
  fontWeight,
  lineHeight,
  space,
} from '~/styles/variables'

interface Props {}

export const WorkDetail: React.FC<Props> = () => {
  const theme = useTheme()
  const params = useParams<{ workId: string }>()
  const media = useMedia()
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
      <Helmet title={work.name} />
      <Inner style={{ maxWidth: 1200 }}>
        <Year>{work.year}</Year>
        <Title>{work.name}</Title>
        <Description dangerouslySetInnerHTML={{ __html: work.description }} />
        <TagList>
          {work.tags.map((tag) => (
            <TagItem key={tag}>{tag}</TagItem>
          ))}
        </TagList>
        {work.url ? (
          !work.unavailable ? (
            <Button href={work.url} target="_blank" rel="noopener">
              View {work.name}
              <ExternalLink
                style={{ marginLeft: space.s }}
                color={'#fff'}
                size={16}
              />
            </Button>
          ) : (
            <UnavailableButton>This site was closed</UnavailableButton>
          )
        ) : null}
        <div style={{ marginTop: space.xl }}>
          {work.images.map((imagePath, i) => (
            <div key={imagePath} style={{ marginBottom: space.l }}>
              {media !== 'sp' && media !== 'tablet' ? (
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
              ) : (
                <img
                  src={imagePath}
                  alt={`${work.name} ${i + 1}`}
                  style={{ width: '100%' }}
                />
              )}
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

const Year = styled('time')((props) => ({
  display: 'block',
  color: props.theme.fg2,
  fontSize: fontSize.m,
  fontWeight: fontWeight.normal,
  lineHeight: lineHeight.just,
}))

const Title = styled('h1')((props) => ({
  marginTop: space.s,
  color: props.theme.fg1,
  fontSize: fontSize.xxxxl,
  lineHeight: lineHeight.heading,
}))

const Description = styled('p')((props) => ({
  marginTop: space.s,
  color: props.theme.fg1,
  fontSize: fontSize.l,
  fontWeight: fontWeight.normal,
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
  marginBottom: space.s,
  paddingRight: space.m,
  paddingLeft: space.m,
  listStyle: 'none',
  color: props.theme.fg1,
  fontSize: fontSize.m,
  border: `1px solid ${props.theme.border}`,
  borderRadius: borderRadius.m,
  backgroundColor: props.theme.bg1,
}))

const Button = styled('a')((props) => ({
  marginTop: space.m,
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
