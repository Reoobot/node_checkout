import {Router} from 'express';

const router = Router();


router.get("/succes", (req, res)=>res.send('hola mundo'));


export default router;
