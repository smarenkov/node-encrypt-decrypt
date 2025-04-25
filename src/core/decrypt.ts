import { createDecipheriv } from "crypto";
import { AES_ALGO } from "../config.js";
import { parseArgs } from "../utils/args.js";

const args = process.argv.slice(2);
const argMap = parseArgs(args);

const privateKeyHex = argMap.privateKeyHex;
const ivHex = argMap.ivHex;
const encryptedHex = argMap.encryptedHex;

if (!privateKeyHex || !ivHex || !encryptedHex) {
  console.error("Missing required arguments");
  process.exit(1);
}

try {
  const decipher = createDecipheriv(AES_ALGO, Buffer.from(privateKeyHex, "hex"), Buffer.from(ivHex, "hex"));
  const decrypted = Buffer.concat([decipher.update(Buffer.from(encryptedHex, "hex")), decipher.final()]);
  const object = JSON.parse(decrypted.toString("utf8"));

  console.log("=== Decryption Result ===");
  console.log("📝 Decrypted JSON:", object);
  console.log("==========================");
} catch (error: any) {
  console.error("Error during decryption:", error.message);
  process.exit(1);
}