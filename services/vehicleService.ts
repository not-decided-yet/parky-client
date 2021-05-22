import axios from "axios";

interface AuthenticateVehicleRequest {
  uid: string;
  encryptedUserSecretToken: string;
}

interface AuthenticateVehicleResponse {
  encryptedVehicleSecretToken: string;
}

export async function authenticateVehicle(
  request: AuthenticateVehicleRequest
): Promise<AuthenticateVehicleResponse> {
  throw new Error("Not implemented yet");
}
