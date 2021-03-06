import type { NextApiRequest, NextApiResponse } from "next";

import crypto from "crypto";

interface ResponsePayload {
  encryptedText: string;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponsePayload>
) => {
  const { plainText, publicKey } = req.body;

  res.status(200).json({
    encryptedText: crypto
      .publicEncrypt(publicKey, Buffer.from(plainText, "utf-8"))
      .toString("base64"),
  });
};
