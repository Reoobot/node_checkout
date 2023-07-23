import { Router } from "express";
import { createSeccion } from "../controllers/payment.controller.js";


const router = Router();



router.post('/checkout-session', createSeccion);
console.log(router);
router.get('/success',(req, res)=> res.redirect('/success.html'));
router.get('/cancel',(req, res)=> res.redirect('/'));

// router.get('/cancel', (req, res) => {
//     res.redirect(path.resolve('path/to/cancel.html'));
//   });


//   router.get('/success', (req, res) => {
//     res.redirect(path.resolve('path/to/success.html'));
//   });

export default router;