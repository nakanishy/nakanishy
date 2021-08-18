import * as React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { Inner } from '~/components/Inner'
import { fontSize, fontWeight, lineHeight, space } from '~/styles/variables'

export const Privacy: React.FC = () => {
  return (
    <Inner style={{ maxWidth: 1000, paddingBottom: space.xl }}>
      <Helmet title="Naker プライバシーポリシー" />
      <Title>プライバシーポリシー</Title>
      <Body>
        「Naker」では、以下のプライバシーポリシーに基づき、利用者の個人情報を取り扱います。
      </Body>
      <Heading>1. 収集する利用者情報</Heading>
      <Body>
        利用目的（後記2.）に記載の目的を達成するために、当アプリが取得する情報は以下のとおりです。
      </Body>
      <Body>
        <ul>
          <li>当アプリ利用に係る端末機器情報</li>
          <li>Cookie及び匿名ID</li>
          <li>IPアドレス</li>
          <li>その他、情報入力フォームに利用者が入力する情報</li>
          <li>広告識別子</li>
          <li>その他、情報入力フォームに利用者が入力する情報</li>
        </ul>
      </Body>
      <Heading>2. 利用目的</Heading>
      <Body>上記の利用者情報を以下の目的のために利用します。</Body>
      <Body>
        <ul>
          <li>通知を送信するため</li>
          <li>その他、サービス提供のため</li>
          <li>お問い合わせ、カスタマーサポートのため</li>
          <li>規約変更等の通知のため</li>
          <li>利用状況の分析のため</li>
          <li>当アプリ上での広告配信のため</li>
        </ul>
      </Body>
      <Heading>3. 個人情報の提供</Heading>
      <Body>
        当アプリは、法令で定める場合を除き、本人の同意に基づき取得した個人情報を、本人の事前の同意なく第三者に提供することはありません。
      </Body>
      <Heading>4. お問い合わせ窓口</Heading>
      <Body>Eメール: keita.nakanishy@gmail.com</Body>
      <Heading>5. 本プライバシーポリシーの変更手続き</Heading>
      <Body>
        法令変更への対応や事業上の必要性のほか、内容改善のために本プライバシーポリシーを変更することがあります。変更を行う場合、既に利用者情報を収集している利用者に通知するものとします。
        <br />
        <br />
        本プライバシーポリシーの変更についての通知を行ったあとも当アプリの利用を継続する場合、本プライバシーポリシーの変更に同意したものとみなします。
      </Body>
      <Body style={{ marginTop: space.m, textAlign: 'right' }}>
        2020年10月14日制定
      </Body>
    </Inner>
  )
}

const Title = styled('h1')({
  fontSize: fontSize.xxl,
  fontWeight: fontWeight.bold,
  lineHeight: lineHeight.heading,
})

const Heading = styled('h2')({
  marginTop: space.l,
  fontSize: fontSize.l,
  fontWeight: fontWeight.bold,
  lineHeight: lineHeight.heading,
})

const Body = styled('p')({
  marginTop: space.m,
  fontSize: fontSize.m,
  lineHeight: lineHeight.body,
})
