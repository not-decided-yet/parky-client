import React from "react";
import Head from "next/head";
import MapBox from "../components/MapBox";
import ParkingLotList from "../components/ParkingLotList";
import dummyParkingLots from "../dummies/parkingLots";

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>Parky</title>
        <meta name="description" content="It's a Parky day!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MapBox parkingLots={dummyParkingLots} className="absolute" />
      <ParkingLotList items={dummyParkingLots} className="relative" />
    </div>
  );
}
