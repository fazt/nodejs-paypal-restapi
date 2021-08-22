import { config } from "dotenv";
config();

export const CLIENT = process.env.CLIENT;
export const SECRET = process.env.SECRET;
export const PAYPAL_API = process.env.PAYPAL_API; // url sandbox or live for your app
export const PORT = process.env.PORT || 3000;
export const HOST =
  process.env.NODE_ENV === "production"
    ? process.env.HOST
    : "http://localhost:" + PORT;
