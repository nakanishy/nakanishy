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
    thumbnail: '/images/nakanishy/nakanishy.png',
    images: ['/images/nakanishy/nakanishy.png'],
    tags: ['branding', 'logo'],
  },

  {
    id: 'colorbase',
    name: 'Colorbase',
    description: 'Colorbase is an all-in-one color tool for all creatives.',
    year: '2021',
    url: 'https://colorbase.app',
    thumbnail: '/images/colorbase/colorbase.png',
    images: ['/images/colorbase/colorbase.png', '/images/colorbase/ui.png'],
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
    thumbnail: '/images/brella/brella.png',
    images: ['/images/brella/brella.png'],
    tags: ['branding', 'logo', 'ui', 'react native'],
  },
  // {
  //   id: 'darken',
  //   name: 'Darken',
  //   description:
  //     'Darken is a dark mode browser that allows you to browse any website in dark mode.',
  //   year: '2021',
  //   url: 'https://apps.apple.com/jp/app/darken/id1571645290',
  //   thumbnail: '/images/darken/darken.png',
  //   images: ['/images/darken/darken.png'],
  //   tags: ['branding', 'logo', 'ui', 'react native'],
  // },
  // {
  //   id: 'jazz',
  //   name: 'Jazz Standard',
  //   description: '',
  //   year: '2021',
  //   url: 'https://apps.apple.com/us/app/jazz-standard/id1579478671',
  //   thumbnail: '/images/jazz/jazz.png',
  //   images: ['/images/jazz/jazz.png'],
  //   tags: ['branding', 'logo', 'ui', 'react native'],
  // },
  {
    id: 'emojist',
    name: 'Emojist',
    description: 'Emojist is a todo app with emojis.',
    year: '2020',
    url: 'https://apps.apple.com/us/app/emojist/id1544892484',
    thumbnail: '/images/emojist/emojist.png',
    images: ['/images/emojist/emojist.png'],
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
    thumbnail: '/images/anyflow/anyflow.png',
    images: ['/images/anyflow/anyflow.png'],
    tags: ['branding', 'logo', 'ui', 'react'],
  },
  {
    id: 'availy',
    name: 'Availy',
    description:
      'Availy is an utility tool to check username availability among social media.',
    year: '2016',
    url: 'https://availy.me',
    thumbnail: '/images/availy/availy.png',
    unavailable: true,
    images: ['/images/availy/availy.png', '/images/availy/ui.png'],
    tags: ['branding', 'logo', 'ui', 'react'],
  },
]
