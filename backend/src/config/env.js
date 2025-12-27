import dotenv from "dotenv";
dotenv.config();

export const env = {
  PORT: process.env.PORT || 5000,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
};

if (!env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL in .env");
}

if (!env.JWT_SECRET) {
  throw new Error("Missing JWT_SECRET in .env");
}
