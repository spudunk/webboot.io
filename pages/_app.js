// NextJS Default styles import
import '../styles/globals.css'

import initFirebase from '../firebase/initFirebase'
initFirebase();

// Next App Default component export
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

