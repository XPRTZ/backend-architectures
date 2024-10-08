import { Router } from 'express';
import { OrderController } from '../controllers/OrderController';
import { IOrderingService } from '../../../application/ports/IOrderingService';

export function createOrderRoutes(orderingService: IOrderingService): Router {
  const router = Router();
  const orderController = new OrderController(orderingService);

  router.post('/orders', orderController.createOrder.bind(orderController));
  router.put('/orders/:orderId', orderController.updateOrder.bind(orderController));
  router.get('/orders/:orderId', orderController.getOrder.bind(orderController));

  return router;
}
