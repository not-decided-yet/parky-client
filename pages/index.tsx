import Head from "next/head";
import Image from "next/image";
import initializeNotification from "../utils/fcm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <button
          onClick={() => {
            navigator.serviceWorker.register("/service-worker.js").then(
              async (registration) => {
                const token = await initializeNotification(registration);
                await navigator.clipboard.writeText(token);
                alert("Your token was copied");
              },
              (err) => console.error(err)
            );
          }}
        >
          request notification
        </button>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
