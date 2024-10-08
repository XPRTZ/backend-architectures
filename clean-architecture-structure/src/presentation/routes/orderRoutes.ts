import { OrderController } from '../controllers/OrderController';

export const orderRoutes = (app) => {
  const orderController = new OrderController();

  app.post('/orders', (req, res) => orderController.createOrder(req, res));
  // Additional routes for orders
};
