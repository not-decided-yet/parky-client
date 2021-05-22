import axios from "axios";
import { KeyPair } from "../pages/api/keypair";

export async function getUserPublicKey(): Promise<KeyPair> {
  return (await axios.get("/api/keypair")).data;
}

// --- --- --- ---

interface EncryptRequest {
  userSecretToken: string;
  vehiclePublicKey: string;
}

interface EncryptResponse {
  encryptedVehiclePublicKey: string;
}

export async function encrypt(
  request: EncryptRequest
): Promise<EncryptResponse> {
  throw new Error("Not implemented yet");
}

// --- --- --- ---

export async function decrypt() {}
