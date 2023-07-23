import { Router } from "express";
import { createSeccion } from "../controllers/payment.controller.js";

import { API_BASE_URL } from "../config.js";


const router = Router();

router.post(`${API_BASE_URL}/checkout-session`, createSeccion);
router.get('/success',(req, res)=> res.redirect('/success.html'));
router.get('/cancel',(req, res)=> res.redirect('/'));



export default router;