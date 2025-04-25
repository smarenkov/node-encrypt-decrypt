import { createCipheriv, randomBytes } from "crypto";
import { AES_ALGO, SAMPLE_JSON } from "../config.js";

try {
  const data = Buffer.from(JSON.stringify(SAMPLE_JSON), "utf8");

  const key = randomBytes(32);
  const iv = randomBytes(16);

  const cipher = createCipheriv(AES_ALGO, key, iv);
  const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);

  console.log("=== Encryption Details ===");
  console.log(`🔑 AES Key:      ${key.toString("hex")}`);
  console.log(`🧂 IV:           ${iv.toString("hex")}`);
  console.log(`📦 Encrypted:    ${encrypted.toString("hex")}`);
  console.log("");
  console.log("▶️  To decrypt, run:");
  console.log(`npm run decrypt -- -privateKeyHex ${key.toString("hex")} -ivHex ${iv.toString("hex")} -encryptedHex ${encrypted.toString("hex")}`);
  console.log("===========================");
} catch (error: any) {
  console.error("Error during encryption:", error.message);
  process.exit(1);
}
