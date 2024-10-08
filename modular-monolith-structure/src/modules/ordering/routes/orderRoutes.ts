import { Router } from 'express';
import { OrderController } from '../controllers/OrderController';

export const orderRoutes = (orderController: OrderController): Router => {
  const router = Router();

  // Define routes here

  return router;
};
