import { Router } from 'express';
import { RegisterCustomer } from './RegisterCustomer';
import { ValidationPipe } from '../../shared/validation/ValidationPipe';
import { RegisterCustomerValidator } from './RegisterCustomer.validator';

export const registerCustomerRouter = Router();

registerCustomerRouter.post('/register', ValidationPipe(RegisterCustomerValidator), async (req, res, next) => {
  try {
    const registerCustomer = new RegisterCustomer(req.app.get('mediator'));
    const result = await registerCustomer.execute(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});
