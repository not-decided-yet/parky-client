import axios from "axios";
import { ParkingLotData } from "../utils/types";

/* Parking Lot Logic here */

interface FetchParkingLotsResponse {
  parkingLots: ParkingLotData[];
}

export async function fetchParkingLots(): Promise<FetchParkingLotsResponse> {
  throw new Error("Not implemented yet");
}

/* User Logic here */

export async function register() {
  throw new Error("Not implemented yet");
}

export async function login() {
  throw new Error("Not implemented yet");
}

interface ReserveRequest {
  uid: string;
}

interface ReserveResponse {
  // position: Ticket?
}

export async function reserve(request: ReserveRequest): Promise<ReserveResponse> {
  throw new Error("Not implemented yet");
}

/* V2D logic here */

interface OpenTransactionRequest {
  uid: string;
  vid: string;
}

interface OpenTransactionResponse {
  userSecretToken: string;
  vehiclePublicKey: string;
}

export async function openTransaction(
  request: OpenTransactionRequest
): Promise<OpenTransactionResponse> {
  throw new Error("Not implemented yet");
}

interface ConfirmTransactionRequest {
  vehicleSecretToken: string;
}

interface ConfirmTransactionResponse {
  success: boolean;
}

export async function confirmTransaction(
  request: ConfirmTransactionRequest
): Promise<ConfirmTransactionResponse> {
  throw new Error("Not implemented yet");
}

/*
const { generateKeyPair } = require('crypto');
generateKeyPair('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'top secret'
  }
}, (err, publicKey, privateKey) => {
  console.log(err, publicKey, privateKey);
});
*/
