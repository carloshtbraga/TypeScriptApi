import { Router } from 'express';
import validation from '../middlewares/postProductValdiation';
import products from '../controllers/products';

const productRouter = Router();

productRouter.post(
  '/products',
  validation.postProductNameValidation,
  validation.postProductPriceValidation,
  products.addProduct,
);
productRouter.get('/products', products.getAllProducts);

export default productRouter;