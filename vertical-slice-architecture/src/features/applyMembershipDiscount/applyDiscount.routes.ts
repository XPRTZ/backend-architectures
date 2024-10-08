import { Router } from 'express';
import { ApplyDiscount } from './ApplyDiscount';
import { ValidationPipe } from '../../shared/validation/ValidationPipe';
import { ApplyDiscountValidator } from './ApplyDiscount.validator';

export const applyDiscountRouter = Router();

applyDiscountRouter.post('/apply-discount', ValidationPipe(ApplyDiscountValidator), async (req, res, next) => {
  try {
    const applyDiscount = new ApplyDiscount(req.app.get('mediator'));
    const result = await applyDiscount.execute(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
});
