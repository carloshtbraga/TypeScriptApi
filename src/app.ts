import express from 'express';
import productRouter from './routers/productsRouters';
import orderRouter from './routers/ordersRouters';
import loginRouter from './routers/loginRouter';

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(orderRouter);
app.use(loginRouter);

export default app;
