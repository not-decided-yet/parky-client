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

      <MapBox parkingLots={dummyParkingLots} className="absolute"/>
      <ParkingLotList items={dummyParkingLots} className="relative"/>
      {/* <button
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
        </button> */}
    </div>
  );
}
