import { Router } from 'express';
import { CreateOrder } from './CreateOrder';
import { ValidationPipe } from '../../shared/validation/ValidationPipe';
import { CreateOrderValidator } from './CreateOrder.validator';
import { Mediator } from '../../shared/mediation/Mediator';

export function createOrderRoutes(mediator: Mediator): Router {
  const router = Router();
  const createOrder = new CreateOrder(mediator);

  router.post(
    '/',
    ValidationPipe(CreateOrderValidator),
    async (req, res, next) => {
      try {
        const result = await createOrder.execute(req.body);
        res.status(201).json(result);
      } catch (error) {
        next(error);
      }
    }
  );

  return router;
}
