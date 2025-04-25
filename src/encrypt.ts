import { createCipheriv, randomBytes } from "crypto";

const AES_ALGO = "aes-256-cbc";

const json = {
  name: "Simon",
};

const data = Buffer.from(JSON.stringify(json), "utf8");

const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv(AES_ALGO, key, iv);
const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);

console.log("=== Encryption Details ===");
console.log(`🔑 AES Key:      ${key.toString("hex")}`);
console.log(`🧂 IV:           ${iv.toString("hex")}`);
console.log(`📦 Encrypted:    ${encrypted.toString("hex")}`);
console.log("===========================");