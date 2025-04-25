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
npm run decrypt -- -privateKeyHex 16d29211f56b2cfdf8e1ef81d699397ea6bc56b3d66dcb484fd62eaa336181a4 -ivHex a81e7492654374bb704a151895e64455 -encryptedHex 9afe9a5bf9744768ad5f2e4d23344581287e40a0aad69b2f08949d68a0fc769d
```

This will:
1. Use the provided key, IV, and encrypted data
2. Decrypt the data back to JSON
3. Output the decrypted JSON object