import '../styles/globals.css';
import type { AppProps } from "next/app";
import { useEffect } from "react";
import initializeNotification from "../utils/fcm";
import { AppWrapper } from "../context/state";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js");
        /*
        .then(
          async (registration) => {
            const token  = await initializeNotification(registration);
            console.log({token});
          },
          err => console.error(err),
        )
        */
      });
    }
  }, []);

  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}
export default MyApp;
