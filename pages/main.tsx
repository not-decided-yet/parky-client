import Head from "next/head";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

const Home = dynamic(() => import("../components/Home"), { ssr: false });

export default function Main() {
  const { prefetch } = useRouter();

  useEffect(() => {
    prefetch("/search");
  }, []);

  return (
    <div className="relative">
      <Head>
        <title>Parky</title>
        <meta name="description" content="It's a Parky day!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}
