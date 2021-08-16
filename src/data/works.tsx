interface Tag {
  name: string
}

export interface Work {
  id: string
  name: string
  description: string
  url?: string
  available?: boolean
  duration: string
  thumbnail: string
  images: string[]
  tags: Tag[]
}

export const works: Work[] = [
  {
    id: 'nakanishy',
    name: 'nakanishy',
    description: 'Logo work for nakanishy.',
    duration: '2021',
    thumbnail: '/static/images/nakanishy/n.png',
    images: ['/static/images/nakanishy/n.png'],
    tags: [
      {
        name: 'branding',
      },
      {
        name: 'logo',
      },
    ],
  },
  {
    id: 'anyflow',
    name: 'Anyflow',
    description:
      'Anyflowは、様々なアプリケーションをかんたんに接続・連携することができる「アプリケーション連携サービス」です。',
    duration: '2018 - 2020',
    url: 'https://anyflow.jp',
    thumbnail: '/static/images/anyflow/anyflow.png',
    images: ['/static/images/anyflow-ui.png'],
    tags: [
      {
        name: 'branding',
      },
      {
        name: 'ui',
      },
      {
        name: 'react',
      },
    ],
  },

  {
    id: 'emojist',
    name: 'Emojist',
    description: 'Emojist は、絵文字でカテゴリー分けできる Todo リストです。',
    duration: '2020',
    url: 'https://apps.apple.com/us/app/emojist/id1544892484',
    thumbnail: '/static/images/emojist/emojist.png',
    images: ['/static/images/emojist/emojist.png'],
    tags: [
      {
        name: 'Logo Design',
      },
      {
        name: 'UI Design',
      },
      {
        name: 'Front-end (React Native)',
      },
    ],
  },
  {
    id: 'colorbase',
    name: 'Colorbase',
    description:
      'Colorbase は、クリエイターのための All-in-One カラーツールです。',
    duration: '2021',
    url: 'https://colorbase.app',
    thumbnail: '/static/images/colorbase/colorbase.png',
    images: ['/static/images/colorbase.png'],
    tags: [
      {
        name: 'branding',
      },
      {
        name: 'logo',
      },
      {
        name: 'type',
      },
      {
        name: 'ui',
      },
      { name: 'react' },
    ],
  },
  {
    id: 'darken',
    name: 'Darken',
    description:
      'Darken は、あらゆる Web サイトをダークモードで見ることができるブラウザーです。',
    duration: '2021',
    url: 'https://apps.apple.com/jp/app/darken/id1571645290',
    thumbnail: '/static/images/darken/darken.png',
    images: ['/static/images/darken/darken.png'],
    tags: [
      {
        name: 'Logo Design',
      },
      {
        name: 'UI Design',
      },
      {
        name: 'Front-end (React Native)',
      },
    ],
  },
  {
    id: 'brella',
    name: 'Brella',
    description: 'Brella は、非公式の気象庁天気アプリです。',
    duration: '2021',
    url:
      'https://apps.apple.com/us/app/brella-%E6%B0%97%E8%B1%A1%E5%BA%81%E3%82%A2%E3%83%97%E3%83%AA/id1575466392',
    thumbnail: '/static/images/brella/brella.png',
    images: ['/static/images/brella.png'],
    tags: [
      {
        name: 'Logo Design',
      },
      {
        name: 'UI Design',
      },
      {
        name: 'Front-end (React Native)',
      },
    ],
  },
  {
    id: 'jazz',
    name: 'Jazz Standard',
    description:
      'Jazz Standard は、ジャズの名曲のコード進行をチェックできるアプリです。',
    duration: '2021',
    url: 'https://apps.apple.com/us/app/jazz-standard/id1579478671',
    thumbnail: '/static/images/jazz.png',
    images: ['/static/images/jazz.png'],
    tags: [
      {
        name: 'Logo Design',
      },
      {
        name: 'UI Design',
      },
      {
        name: 'Front-end (React Native)',
      },
    ],
  },
  {
    id: 'availy',
    name: 'Availy',
    description:
      'Availy is a web service that allows you to search availability of an username across popular SNSs and web services.',
    duration: '2016',
    url: 'https://availy.me',
    thumbnail: '/static/images/availy/ui.png',
    images: ['/static/images/availy-ui.png'],
    tags: [
      {
        name: 'Logo Design',
      },
      {
        name: 'UI Design',
      },
      {
        name: 'Front-end (React)',
      },
    ],
  },
]
