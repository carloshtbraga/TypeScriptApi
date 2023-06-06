import { NextFunction, Request, Response } from 'express';
import UserModel from '../database/models/user.model';

const postOrderValidationUserId = async (req:Request, res:Response, n: NextFunction):
Promise<NextFunction | Response | undefined> => {
  const { userId } = req.body;
  if (!userId) return res.status(400).json({ message: '"userId" is required' });
  if (typeof userId !== 'number') {
    return res
      .status(422).json({ message: '"userId" must be a number' }); 
  }
  const userValid = await UserModel.findByPk(userId);
  if (!userValid) {
    return res.status(404)
      .json({ message: '"userId" not found' });
  }
  n(); 
};

const postOrderValidationProductId = async (req:Request, res:Response, n: NextFunction):
Promise<NextFunction | Response | undefined> => {
  const { productIds } = req.body;
  if (!productIds) return res.status(400).json({ message: '"productIds" is required' });
  if (!Array.isArray(productIds)) {
    return res
      .status(422).json({ message: '"productIds" must be an array' }); 
  }
  if (productIds.length < 1) {
    return res.status(422)
      .json({ message: '"productIds" must include only numbers' });
  }
  n(); 
};

export default { postOrderValidationUserId, postOrderValidationProductId };