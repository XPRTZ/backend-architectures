import { Router } from 'express';
import { PaymentController } from '../controllers/PaymentController';

export const paymentRoutes = (paymentController: PaymentController): Router => {
  const router = Router();

  // Define routes here

  return router;
};
