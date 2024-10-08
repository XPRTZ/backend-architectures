import { Router } from 'express';
import { UserController } from '../controllers/UserController';

export const userRoutes = (userController: UserController): Router => {
  const router = Router();

  // Define routes here

  return router;
};
