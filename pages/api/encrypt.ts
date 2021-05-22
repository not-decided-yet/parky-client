import type { NextApiRequest, NextApiResponse } from "next";

import { readFile } from "fs/promises";
import crypto from "crypto";

type Data = {
  name: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const privateKey = await readFile("./pages/api/key", { encoding: "utf-8" });
  const publicKey = await readFile("./pages/api/key.pub", { encoding: "utf-8" });

  const encrypted = crypto.publicEncrypt(publicKey, Buffer.from("안녕하세요", "utf-8"));
  console.log(encrypted.toString("base64"));

  const decrypted = crypto.privateDecrypt(privateKey, encrypted).toString("utf-8");
  console.log(decrypted);

  res.status(200).json({ name: "John Doe" });
};
