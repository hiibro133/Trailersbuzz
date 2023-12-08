import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import Script from 'next/script';  // Import Script component

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      {/* Higher Order Component */}
        <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
