import express from 'express'
import paymentRoutes from './routes/payment.routers.js'
import {PORT} from './config.js'
import path from 'path'

const app = express()

app.use(express.json())

app.use(paymentRoutes)

app.use(express.static(path.resolve('src/public')))

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});


app.listen(PORT)
console.log('server on port', PORT)