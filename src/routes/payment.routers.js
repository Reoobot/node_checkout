import {Router} from 'express';
import { createSeccion } from '../controllers/payment.controller.js';

const router = Router();

router.post("/checkout-session", createSeccion);
router.get("/succes", createSeccion);
router.get("/cancel", createSeccion);


export default router;
