import type { AppProps } from 'next/app'
import type { LayoutProps } from '@vercel/examples-ui/layout'
import { getLayout } from '@vercel/examples-ui'
import '@vercel/examples-ui/globals.css'
import MyLayout from '../components/layout' // Adjust the import path as necessary


export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component)

  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  )
}
