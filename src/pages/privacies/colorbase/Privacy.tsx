import * as React from 'react'
import { Helmet } from 'react-helmet'
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
      <Helmet title="Brella プライバシーポリシー" />
      <H1>プライバシーポリシー</H1>
      <P>
        Colorbase（以下、「本アプリ」）では、以下のプライバシーポリシーに基づき、利用者の個人情報を取り扱います。
      </P>
      <H2>1. 個人情報の定義</H2>
      <P>
        個人情報とは、個人情報保護法にいう「個人情報」を指すものとし、特定の個人を識別できる情報を指します。
      </P>
      <H2>2. 収集する個人情報</H2>
      {/* <P>
        利用目的（後記3.）に記載の目的を達成するために、本アプリが取得する情報は以下のとおりです。これらを複合して使用する場合に個人を識別できる場合には個人情報として扱います。
      </P> */}
      <Ul>
        <Li>収集する個人情報はありません</Li>
      </Ul>
      {/* <H2>3. 利用目的</H2>
      <P>上記の個人情報を以下の目的のために利用します。</P>
      <Ul>
        <Li>利用状況の分析のため</Li>
        <Li>サービスの改善のため</Li>
        <Li>本アプリ上での広告配信のため</Li>
        <Li>お問い合わせ対応、カスタマーサポートのため</Li>
      </Ul> */}
      <H2>3. 個人情報の提供</H2>
      <P>
        本アプリは、次に挙げる場合を除き、本人の事前の同意なく第三者に個人情報を提供することはありません。
      </P>
      <Ul>
        <Li>法令に基づく場合</Li>
        <Li>本プライバシーポリシーに公表している場合</Li>
        <Li>あらかじめ同意を得ている場合</Li>
        <Li>
          合併その他の事由による事業の承継に伴って個人情報が提供される場合
        </Li>
      </Ul>
      <H2>4. 本プライバシーポリシーの変更</H2>
      <P>
        法令変更への対応や事業上の必要性のほか、内容改善のために本プライバシーポリシーを変更することがあります。変更を行う場合、既に情報を収集している利用者に通知するものとします。
      </P>
      <P>
        本プライバシーポリシーの変更についての通知を行ったあとも本アプリの利用を継続する場合、本プライバシーポリシーの変更に同意したものとみなします。
      </P>
      <H2>5. お問い合わせ窓口</H2>
      <P>Eメール: hello@colorbase.app</P>
      <P>制定日: 2021年10月27日</P>
    </Inner>
  )
}

const H1 = styled('h1')((props) => ({
  color: props.theme.fg1,
  fontSize: fontSize.xxxl,
  fontWeight: fontWeight.bold,
}))

const H2 = styled('h2')((props) => ({
  marginTop: space.l,
  color: props.theme.fg1,
  fontSize: fontSize.xl,
  fontWeight: fontWeight.bold,
}))

const P = styled('p')((props) => ({
  marginTop: space.m,
  color: props.theme.fg1,
  fontSize: fontSize.m,
  lineHeight: lineHeight.body,
}))

const Ul = styled('ul')({
  marginTop: space.m,
})

const Li = styled('li')((props) => ({
  color: props.theme.fg1,
  fontSize: fontSize.m,
}))
