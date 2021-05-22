// TODO: this is a just test page for encryptionService.

import { useEffect, useState } from "react";
import { useAppContext } from "../context/state";
import { decrypt, encrypt } from "../services/encryptionService";

export default function Test() {
  const { keyPair } = useAppContext()!;

  if (!keyPair) {
    return <p>waiting for generating keypair...</p>;
  }

  const { privateKey, publicKey } = keyPair;

  const [encrypted, setEncrypted] = useState<string>("Loading...");
  const [decrypted, setDecrypted] = useState<string>("Loading...");

  useEffect(() => {
    encrypt({ userSecretToken: "kkyw0915", vehiclePublicKey: publicKey }).then(
      ({ encryptedVehiclePublicKey }) => setEncrypted(encryptedVehiclePublicKey)
    );
  }, []);

  useEffect(() => {
    encrypted &&
      decrypt({
        userPrivateKey: privateKey,
        encryptedVehicleSecretToken: encrypted,
      }).then(({ vehicleSecretToken }) => setDecrypted(vehicleSecretToken));
  }, [encrypted]);

  return (
    <div>
      <p>{encrypted}</p>
      <p>{decrypted}</p>
    </div>
  );
}
