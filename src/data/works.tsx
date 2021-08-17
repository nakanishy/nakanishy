export interface Work {
  id: string
  name: string
  description: string
  url?: string
  unavailable?: boolean
  year: string
  thumbnail: string
  images: string[]
  tags: string[]
}

export const works: Work[] = [
  {
    id: 'nakanishy',
    name: 'nakanishy',
    description: 'The logo work for nakanishy.',
    year: '2021',
    thumbnail: '/static/images/nakanishy/nakanishy.png',
    images: ['/static/images/nakanishy/nakanishy.png'],
    tags: ['branding', 'logo'],
  },

  {
    id: 'colorbase',
    name: 'Colorbase',
    description: 'Colorbase is an all-in-one color tool for all creatives.',
    year: '2021',
    url: 'https://colorbase.app',
    thumbnail: '/static/images/colorbase/colorbase.png',
    images: [
      '/static/images/colorbase/colorbase.png',
      '/static/images/colorbase/ui.png',
    ],
    tags: ['branding', 'logo', 'ui', 'react'],
  },
  {
    id: 'brella',
    name: 'Brella',
    description:
      'A weather app with reliable information from the JMA (気象庁).',
    year: '2021',
    url:
      'https://apps.apple.com/us/app/brella-%E6%B0%97%E8%B1%A1%E5%BA%81%E3%82%A2%E3%83%97%E3%83%AA/id1575466392',
    thumbnail: '/static/images/brella/brella.png',
    images: ['/static/images/brella/brella.png'],
    tags: ['branding', 'logo', 'ui', 'react native'],
  },
  // {
  //   id: 'darken',
  //   name: 'Darken',
  //   description:
  //     'Darken is a dark mode browser that allows you to browse any website in dark mode.',
  //   year: '2021',
  //   url: 'https://apps.apple.com/jp/app/darken/id1571645290',
  //   thumbnail: '/static/images/darken/darken.png',
  //   images: ['/static/images/darken/darken.png'],
  //   tags: ['branding', 'logo', 'ui', 'react native'],
  // },
  // {
  //   id: 'jazz',
  //   name: 'Jazz Standard',
  //   description: '',
  //   year: '2021',
  //   url: 'https://apps.apple.com/us/app/jazz-standard/id1579478671',
  //   thumbnail: '/static/images/jazz/jazz.png',
  //   images: ['/static/images/jazz/jazz.png'],
  //   tags: ['branding', 'logo', 'ui', 'react native'],
  // },
  {
    id: 'emojist',
    name: 'Emojist',
    description: 'Emojist is a todo app with emojis.',
    year: '2020',
    url: 'https://apps.apple.com/us/app/emojist/id1544892484',
    thumbnail: '/static/images/emojist/emojist.png',
    images: ['/static/images/emojist/emojist.png'],
    tags: ['branding', 'logo', 'ui', 'react native'],
  },
  {
    id: 'anyflow',
    name: 'Anyflow',
    description: `Anyflow is an iPaaS, Integration Platform as a Service.
<br />
I co-founded the company in 2017. I was in charge of frontend development and design.`,
    year: '2018',
    url: 'https://anyflow.jp',
    thumbnail: '/static/images/anyflow/anyflow.png',
    images: [
      '/static/images/anyflow/anyflow.png',
      '/static/images/anyflow-ui.png',
    ],
    tags: ['branding', 'logo', 'ui', 'react'],
  },
  {
    id: 'availy',
    name: 'Availy',
    description:
      'Availy is an utility tool to check username availability among social media.',
    year: '2016',
    url: 'https://availy.me',
    thumbnail: '/static/images/availy/availy.png',
    unavailable: true,
    images: [
      '/static/images/availy/availy.png',
      '/static/images/availy/ui.png',
    ],
    tags: ['branding', 'logo', 'ui', 'react'],
  },
]
