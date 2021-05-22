import Head from "next/head";

import dynamic from "next/dynamic";

const Home = dynamic(() => import("../components/Home"), { ssr: false });

export default function Main() {
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
