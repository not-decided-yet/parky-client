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
      modulusLength: 2048,
      publicKeyEncoding: {
        type: "pkcs1",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs1",
        format: "pem",
      },
    },
    (err, publicKey, privateKey) => {
      res.status(200).json({ privateKey, publicKey });
    }
  );
};
