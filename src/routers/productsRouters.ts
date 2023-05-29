import { Router } from 'express';
import products from '../controllers/products';

const productRouter = Router();

productRouter.post('/products', products.addProduct);
productRouter.get('/products', products.getAllProducts);

export default productRouter;