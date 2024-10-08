import { Router } from 'express';
import { UpdateOrderStatus } from './UpdateOrderStatus';
import { ValidationPipe } from '../../shared/validation/ValidationPipe';
import { UpdateOrderStatusValidator } from './UpdateOrderStatus.validator';
import { Mediator } from '../../shared/mediation/Mediator';

export function updateOrderStatusRoutes(mediator: Mediator): Router {
  const router = Router();
  const updateOrderStatus = new UpdateOrderStatus(mediator);

  router.patch(
    '/:orderId',
    ValidationPipe(UpdateOrderStatusValidator),
    async (req, res, next) => {
      try {
        const result = await updateOrderStatus.execute(req.params.orderId, req.body);
        res.json(result);
      } catch (error) {
        next(error);
      }
    }
  );

  return router;
}
