import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { Splash } from "../components/Splash";
import { useAppContext } from "../context/state";
import { Coordinate } from "../utils/types";

const requestGeolocation = (
  navigator: Navigator,
  setLocation?: (location: Coordinate) => void
) =>
  navigator.permissions.query({ name: "geolocation" }).then(
    (permissionStatus: PermissionStatus) =>
      new Promise((resolve: (isGeolocationOk: boolean) => void) => {
        console.log("permissionStatus.state", permissionStatus.state);
        if (permissionStatus.state == "prompt") {
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

const requestFCMPush = new Promise((resolve, reject) => {
  // TODO: implement
  resolve(null);
});

export default function Index() {
  const { push } = useRouter();
  const context = useAppContext();

  useEffect(() => {
    Promise.all([
      requestGeolocation(navigator, context?.setLocation),
      requestFCMPush,
    ]).then(() => push("/main"));
  }, []);

  return <Splash />;
}
