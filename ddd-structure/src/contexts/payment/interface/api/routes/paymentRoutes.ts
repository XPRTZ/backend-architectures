import { Router } from 'express';
import { PaymentController } from '../controllers/PaymentController';
import { IPaymentService } from '../../../application/ports/IPaymentService';

export function createPaymentRoutes(paymentService: IPaymentService): Router {
  const router = Router();
  const paymentController = new PaymentController(paymentService);

  router.post('/payments', paymentController.processPayment.bind(paymentController));
  router.get('/payments/:paymentId/status', paymentController.getPaymentStatus.bind(paymentController));

  return router;
}
