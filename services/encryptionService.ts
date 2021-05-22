import axios from "axios";
import { KeyPair } from "../pages/api/keypair";

export async function getUserPublicKey(): Promise<KeyPair> {
  return (await axios.get("/api/keypair")).data;
}

interface EncryptRequest {
  userSecretToken: string;
  vehiclePublicKey: string;
}

interface EncryptResponse {
  encryptedVehiclePublicKey: string;
}

export async function encrypt({
  userSecretToken,
  vehiclePublicKey,
}: EncryptRequest): Promise<EncryptResponse> {
  const { data } = await axios.post("/api/encrypt", {
    plainText: userSecretToken,
    publicKey: vehiclePublicKey,
  });
  return { encryptedVehiclePublicKey: data.encryptedText };
}

interface DecryptRequest {
  userPrivateKey: string;
  encryptedVehicleSecretToken: string;
}

interface DecryptResponse {
  vehicleSecretToken: string;
}

export async function decrypt({
  userPrivateKey,
  encryptedVehicleSecretToken,
}: DecryptRequest): Promise<DecryptResponse> {
  const { data } = await axios.post("/api/decrypt", {
    encryptedText: encryptedVehicleSecretToken,
    privateKey: userPrivateKey,
  });
  return { vehicleSecretToken: data.plainText };
}
