import { Router } from 'express';
import loginUser from '../controllers/login';
import loginUserAndPwValidation from '../middlewares/loginUserAndPwValidation';

const loginRouter = Router();

loginRouter.post('/login', loginUserAndPwValidation, loginUser);

export default loginRouter;