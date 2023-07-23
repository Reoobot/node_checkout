import { config } from "dotenv";

config();

export const port = process.env.PORT || 3000;


export const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';


export const STRIPE_PRIVATE_KEY = process.env.STRIPE_PRIVATE_KEY;