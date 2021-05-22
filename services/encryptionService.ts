import axios from "axios";

export async function getUserPublicKey() {

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
