import express from 'express';
import productRouter from './routers/productsRouters';
import orderRouter from './routers/ordersRouters';

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(orderRouter);

export default app;
