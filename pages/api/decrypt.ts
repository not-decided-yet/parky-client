import type { NextApiRequest, NextApiResponse } from "next";

import { readFile } from "fs/promises";
import crypto from "crypto";

interface ResponsePayload {
  plainText: string;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponsePayload>
) => {
  const { encryptedText, privateKey } = req.body;

  res.status(200).json({
    plainText: crypto
      .privateDecrypt(privateKey, Buffer.from(encryptedText, "base64"))
      .toString("utf-8"),
  });
};
