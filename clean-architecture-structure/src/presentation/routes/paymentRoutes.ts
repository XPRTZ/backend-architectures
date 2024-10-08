import { PaymentController } from '../controllers/PaymentController';

export const paymentRoutes = (app) => {
  const paymentController = new PaymentController();

  app.post('/payments', (req, res) => paymentController.processPayment(req, res));
  // Additional routes for payments
};
