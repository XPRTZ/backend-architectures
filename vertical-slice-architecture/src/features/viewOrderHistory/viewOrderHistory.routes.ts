import { Router } from 'express';
import { ViewOrderHistory } from './ViewOrderHistory.query';
import { ValidationPipe } from '../../shared/validation/ValidationPipe';
import { ViewOrderHistoryValidator } from './ViewOrderHistory.validator';

export const viewOrderHistoryRouter = Router();

viewOrderHistoryRouter.get('/order-history', ValidationPipe(ViewOrderHistoryValidator), async (req, res, next) => {
  try {
    const viewOrderHistory = new ViewOrderHistory(req.app.get('mediator'));
    const result = await viewOrderHistory.execute(req.query as any);
    res.json(result);
  } catch (error) {
    next(error);
  }
});
