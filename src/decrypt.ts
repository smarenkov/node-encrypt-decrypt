import { createDecipheriv } from "crypto";

const args = process.argv.slice(2);
const argMap: { [key: string]: string } = {};

args.forEach((arg, index) => {
  if (arg.startsWith('-')) {
    const key = arg.slice(1);
    const value = args[index + 1];
    if (value && !value.startsWith('-')) {
      argMap[key] = value;
    }
  }
});

const privateKeyHex = argMap.privateKeyHex;
const ivHex = argMap.ivHex;
const encryptedHex = argMap.encryptedHex;

if (!privateKeyHex || !ivHex || !encryptedHex) {
  console.error("Missing required arguments");
  process.exit(1);
}

try {
  const decipher = createDecipheriv("aes-256-cbc", Buffer.from(privateKeyHex, "hex"), Buffer.from(ivHex, "hex"));
  const decrypted = Buffer.concat([decipher.update(Buffer.from(encryptedHex, "hex")), decipher.final()]);
  const object = JSON.parse(decrypted.toString("utf8"));

  console.log("=== Decryption Result ===");
  console.log("📝 Decrypted JSON:", object);
  console.log("==========================");
} catch (error: any) {
  console.error("Error during decryption:", error.message);
  process.exit(1);
}