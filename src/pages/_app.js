// NextJS Default styles import
import "../styles/globals.css";
import { notoSerif } from "../lib/fonts";

// Next App Default component export
function MyApp({ Component, pageProps }) {
  return (
    <main className={notoSerif.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
