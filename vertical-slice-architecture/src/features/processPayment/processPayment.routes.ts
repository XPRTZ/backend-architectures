import { Router } from 'express';
import { ProcessPayment } from './ProcessPayment';
import { ValidationPipe } from '../../shared/validation/ValidationPipe';
import { ProcessPaymentValidator } from './ProcessPayment.validator';

export const processPaymentRouter = Router();

processPaymentRouter.post('/process-payment', ValidationPipe(ProcessPaymentValidator), async (req, res, next) => {
  try {
    const processPayment = new ProcessPayment(req.app.get('mediator'));
    const result = await processPayment.execute(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
});
