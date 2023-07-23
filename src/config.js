import { config } from "dotenv";

config();

export const port = process.env.PORT || 3001;

export const STRIPE_PRIVATE_KEY = process.env.STRIPE_PRIVATE_KEY;