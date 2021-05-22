import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
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

// TODO: not working... (want to interrupt when permissionStatus.state === "prompt")
const requestFCMPush =
  (
    navigator: Navigator,
    setPushConfirmation: (pushConfirmation: () => void) => void
  ) =>
  async () => {
    const permissionStatus = await navigator.permissions.query({
      name: "notifications",
    });

    console.log("notifications permission status", permissionStatus.state);
    if (permissionStatus.state === "prompt") {
      await new Promise((resolve) => {
        setPushConfirmation(() => resolve(null));
      });
    }
  };
/*
navigator.serviceWorker
          .register("/service-worker.js")
          .then(initializeNotification)
          .then(() => {
            console.log("Finished"); // TODO: Remove
            resolve(true);
          })
          .catch((err) => {
            console.error(err);
            resolve(false);
          });
*/

export default function Index() {
  const { push } = useRouter();
  const context = useAppContext();

  const [pushConfirmation, setPushConfirmation] =
    useState<(() => void) | null>(null);

  useEffect(() => {
    Promise.all([
      requestGeolocation(navigator, context?.setLocation),
      requestFCMPush(navigator, setPushConfirmation),
    ]).then(() => push("/main"));
  }, []);

  return (
    <>
      <Splash />
      {pushConfirmation && (
        <div className="absolute bg-black inset-0 opacity-20">Hi</div>
      )}
    </>
  );
}
