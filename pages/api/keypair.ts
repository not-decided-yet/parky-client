import type { NextApiRequest, NextApiResponse } from "next";

import crypto from "crypto";

export interface KeyPair {
  privateKey: string;
  publicKey: string;
}

export default async (req: NextApiRequest, res: NextApiResponse<KeyPair>) => {
  crypto.generateKeyPair(
    "rsa",
    {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: "spki",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs8",
        format: "pem",
        cipher: "aes-256-cbc",
        passphrase: "top secret",
      },
    },
    (err, publicKey, privateKey) => {
      res.status(200).json({ privateKey, publicKey });
    }
  );
};
