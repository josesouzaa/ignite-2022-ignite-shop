import Image from 'next/image'
import type { AppProps } from 'next/app'

import { globalStyles } from '../styles/global'

import { styled } from '../styles'
import logoImg from '../assets/logo.svg'

globalStyles()

//STYLE
const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh'
})

const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto'
})

//COMPONENT
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
