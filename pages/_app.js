// NextJS Default styles import
import '../styles/globals.css'
import { Noto_Serif } from 'next/font/google'

const notoSerif = Noto_Serif({ subsets: ['latin'] })


// Next App Default component export
function MyApp({ Component, pageProps }) {
  return (
    <main className={notoSerif.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp

