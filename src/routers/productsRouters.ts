import { Router } from 'express';
import v from '../middlewares/postProductValidation';
import products from '../controllers/products';

const productRouter = Router();

productRouter.post(
  '/products',
  v.postProductNameValidation,
  v.postProductPriceValidation,
  products.addProduct,
);
productRouter.get('/products', products.getAllProducts);

export default productRouter;