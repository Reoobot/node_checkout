import { Router } from "express";
import { createSeccion } from "../controllers/payment.controller.js";

const router = Router();

router.post("/checkout-session", createSeccion);
router.get('/success',(req, res)=> res.redirect("/success.html"));
router.get('/cancel',(req, res)=> res.redirect("/"));


export default router;