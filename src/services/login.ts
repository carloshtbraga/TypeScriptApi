import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import tokenTable from '../utils/tokenTable';
import { ServiceResponse } from '../types/ServiceResponse';

export type Login = {
  username: string,
  password: string
};

const login = async ({ username, password }:Login):Promise<ServiceResponse<string>> => {
  const isUserReal = await UserModel.findOne({ where: { username } });
  if (!isUserReal) { 
    return { status: 'NOT_FOUND', data: { message: 'Username or password invalid' } }; 
  }
  const isPasswordValid = bcrypt.compareSync(password, isUserReal.dataValues.password);
  if (!isPasswordValid) { 
    return { status: 'NOT_FOUND', data: { message: 'Username or password invalid' } }; 
  }
  const iDAndUsername = {
    id: isUserReal.dataValues.id,
    username: isUserReal.dataValues.username,
  };
  return { status: 'SUCCESSFUL', data: tokenTable.tokenGenerator(iDAndUsername),
  };
};

export default {
  login,
};