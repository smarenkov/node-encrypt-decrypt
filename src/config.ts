import * as dotenv from 'dotenv';

dotenv.config();

const AES_ALGO_ENV = process.env.AES_ALGO;
if (!AES_ALGO_ENV) {
  console.error("AES_ALGO is not set in .env file");
  process.exit(1);
}

export const AES_ALGO: string = AES_ALGO_ENV;

export const SAMPLE_JSON = {
  name: "Simon",
  website: "https://smarenkov.github.io",
};