import { Router } from 'express';
import { LoginCustomer } from './LoginCustomer';
import { ValidationPipe } from '../../shared/validation/ValidationPipe';
import { LoginCustomerValidator } from './LoginCustomer.validator';

export const loginCustomerRouter = Router();

loginCustomerRouter.post('/login', ValidationPipe(LoginCustomerValidator), async (req, res, next) => {
  try {
    const loginCustomer = new LoginCustomer(req.app.get('mediator'));
    const result = await loginCustomer.execute(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
});
