import { Router } from 'express';
import products from '../controllers/products';

const productRouter = Router();

productRouter.post('/products', products.addProduct);

export default productRouter;