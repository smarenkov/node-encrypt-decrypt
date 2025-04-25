# Node.js JSON Encryption/Decryption

A simple Node.js utility for encrypting and decrypting JSON data using AES-256-CBC encryption.

## Features

- Encrypt JSON data with AES-256-CBC encryption
- Decrypt encrypted data back to JSON

## Installation

```bash
npm install
```

## Usage

### Customize Sample JSON

Edit `src/config.ts` to modify the sample JSON data:

```typescript
export const SAMPLE_JSON = {
  name: "Simon",
  website: "https://smarenkov.github.io",
};
```

### Encrypt JSON Data

```bash
npm run encrypt
```

This will:
1. Generate a random 32-byte key and 16-byte IV
2. Encrypt the sample JSON data
3. Output the encryption details including the key, IV, and encrypted data

### Decrypt Data

```bash
npm run decrypt -- -privateKeyHex <key> -ivHex <iv> -encryptedHex <encryptedData>
```

For example:
```bash
npm run decrypt -- -privateKeyHex 7cea2a87a699ec9d069894454c6af2fa85ba35430e94e81ef9df149a684aecb1 -ivHex 26e1e513bd134ab173d66f380710a279 -encryptedHex 48595446c4c79909526aa6195a5d5115e6623c6967a1fb34339d239ef5447f50958a81128c6d994510ead135938603e73db947f771e27c28a4d879f97da4fcf5
```

This will:
1. Use the provided key, IV, and encrypted data
2. Decrypt the data back to JSON
3. Output the decrypted JSON object