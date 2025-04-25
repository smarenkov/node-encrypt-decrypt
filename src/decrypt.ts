import { createDecipheriv } from "crypto";

const privateKeyHex = "16d29211f56b2cfdf8e1ef81d699397ea6bc56b3d66dcb484fd62eaa336181a4";
const ivHex = "a81e7492654374bb704a151895e64455";
const encryptedHex = '9afe9a5bf9744768ad5f2e4d23344581287e40a0aad69b2f08949d68a0fc769d'

const decipher = createDecipheriv("aes-256-cbc", Buffer.from(privateKeyHex, "hex"), Buffer.from(ivHex, "hex"));
const decrypted = Buffer.concat([decipher.update(Buffer.from(encryptedHex, "hex")), decipher.final()]);
const obj = JSON.parse(decrypted.toString("utf8"));

console.log("=== Decryption Result ===");
console.log("📝 Decrypted JSON:", obj);
console.log("==========================");