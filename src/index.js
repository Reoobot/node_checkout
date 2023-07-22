import express from 'express'
import {PORT} from './config.js'
import paymeRouters from './routes/payment.routers.js'

const app = express()

app.use(express.json())

app.use(paymeRouters)

app.listen(PORT)
console.log('server on port', PORT)