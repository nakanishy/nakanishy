import * as React from 'react'
import styled from 'styled-components'

import { Inner } from '~/components/Inner'
import { fontSize, fontWeight, lineHeight, space } from '~/styles/variables'

export const Privacy: React.FC = () => {
  return (
    <Inner
      style={{
        maxWidth: 1000,
        paddingBottom: space.xl,
      }}
    >
      <Heading>プライバシーポリシー</Heading>
      <Body>
        「Jazz
        Standard」では、以下のプライバシーポリシーに基づき、利用者の個人情報を取り扱います。
      </Body>
      <Heading>1. 収集する利用者情報</Heading>
      <Body>
        利用目的（後記2.）に記載の目的を達成するために、当アプリが取得する情報は以下のとおりです。
      </Body>
      <Body>
        <ul>
          <li>広告ID</li>
          <li>お問い合わせフォームに利用者が入力する情報</li>
        </ul>
      </Body>
      <Heading>2. 利用目的</Heading>
      <Body>上記の利用者情報を以下の目的のために利用します。</Body>
      <Body>
        <ul>
          <li>広告配信のため</li>
          <li>お問い合わせ、カスタマーサポートのため</li>
        </ul>
      </Body>
      <Heading>3. 個人情報の提供</Heading>
      <Body>
        当アプリは、法令で定める場合を除き、本人の同意に基づき取得した個人情報を、本人の事前の同意なく第三者に提供することはありません。
      </Body>
      <Heading>4. お問い合わせ窓口</Heading>
      <Body>Eメール: nakanishy@yahoo.com</Body>
      <Heading>5. 本プライバシーポリシーの変更手続き</Heading>
      <Body>
        法令変更への対応や事業上の必要性のほか、内容改善のために本プライバシーポリシーを変更することがあります。
      </Body>
      <Body style={{ marginTop: space.m, textAlign: 'right' }}>
        2021年8月4日制定
      </Body>
    </Inner>
  )
}

const Heading = styled('h2')({
  marginTop: space.l,
  fontSize: fontSize.l,
  fontWeight: fontWeight.bold,
  lineHeight: lineHeight.heading,
})

const Body = styled('p')({
  marginTop: space.m,
  fontSize: fontSize.m,
  fontWeight: 400,
  lineHeight: lineHeight.body,
})
