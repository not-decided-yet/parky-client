import React, { useState } from "react";
import Head from "next/head";
import MapBox from "../components/MapBox";
import MainBackdrop, { BackdropModes } from "../components/MainBackdrop";
import dummyParkingLots from "../dummies/parkingLots";

export default function Home() {
  const [backdropMode, setBackdropMode] = useState<BackdropModes>(
    BackdropModes.browsing
  );

  return (
    <div className="relative">
      <Head>
        <title>Parky</title>
        <meta name="description" content="It's a Parky day!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute z-50">
        <button onClick={() => setBackdropMode(BackdropModes.browsing)}>
          Browse
        </button>
        <button onClick={() => setBackdropMode(BackdropModes.auth)}>
          Auth
        </button>
        <button onClick={() => setBackdropMode(BackdropModes.detail)}>
          Detail
        </button>
      </div>
      <MapBox parkingLots={dummyParkingLots} className="absolute" />
      <MainBackdrop
        items={dummyParkingLots}
        className="relative"
        mode={backdropMode}
      />
    </div>
  );
}
