import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import initializeFirebase from '../utils';



function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(
          async (registration) => {
            const token  = await initializeFirebase(registration);
            console.log({token});
          },
          err => console.error(err),
        )
      });
    }
  }, []);

  return <Component {...pageProps} />
}
export default MyApp
