import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { productRoute } from './app/module/product/product.route'
import { orderRoute } from './app/module/order/order.route'
const app : Application = express()

// middleware
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/products', productRoute)
app.use('/api/orders', orderRoute)

app.get('/', (req : Request, res : Response) => {
  res.send('Hello World!')
})


export default app;