import classNames from "classnames";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { Splash } from "../components/Splash";
import { useAppContext } from "../context/state";
import initializeNotification from "../utils/fcm";
import { Coordinate } from "../utils/types";

const requestGeolocation = (
  navigator: Navigator,
  setLocation?: (location: Coordinate) => void
) =>
  navigator.permissions.query({ name: "geolocation" }).then(
    (permissionStatus: PermissionStatus) =>
      new Promise((resolve: (isGeolocationOk: boolean) => void) => {
        console.log("geolocation permission status", permissionStatus.state);
        if (permissionStatus.state === "prompt") {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setLocation?.([
                position.coords.longitude,
                position.coords.latitude,
              ]);
              resolve(true);
            },
            () => resolve(false)
          );
          return;
        }

        resolve(permissionStatus.state === "granted");
      })
  );

interface PushConfirmation {
  isModal: boolean;
  callback: () => void;
}

const requestFCMPush = async (
  navigator: Navigator,
  setPushConfirmation: (pushConfirmation: PushConfirmation) => void,
) => {
  const permissionStatus = await navigator.permissions.query({
    name: "notifications",
  });

  console.log("notifications permission status", permissionStatus.state);
  if (permissionStatus.state === "granted") {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(initializeNotification);
  } else if (permissionStatus.state === "prompt") {
    await new Promise((resolve) => {
      setPushConfirmation({
        isModal: true,
        callback: () => resolve(null),
      });
    });
  }
};

export default function Index() {
  const { push, prefetch } = useRouter();
  const context = useAppContext();
  const [pushConfirmation, setPushConfirmation] = useState<PushConfirmation>({
    isModal: false,
    callback: () => {},
  });

  useEffect(() => {
    prefetch("/main");
    Promise.all([
      requestGeolocation(navigator, context?.setLocation),
      requestFCMPush(navigator, setPushConfirmation),
    ]).then(() => push("/main"));
  }, []);

  return (
    <>
      <Splash />
      {pushConfirmation.isModal && (
        <>
          <div
            className={classNames("absolute bg-black inset-0 opacity-80")}
          ></div>
          <div className="absolute inset-0 flex">
            <div className="bg-white m-auto px-6 py-4 rounded-md flex flex-col">
              <p className="text-md">Notification permission is required.</p>
              <div className="mt-2 self-end">
                <button
                  className="text-sm text-primary"
                  onClick={() =>
                    navigator.serviceWorker
                      .register("/service-worker.js")
                      .then(initializeNotification)
                      .then(pushConfirmation.callback)
                  }
                >
                  Enable
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
