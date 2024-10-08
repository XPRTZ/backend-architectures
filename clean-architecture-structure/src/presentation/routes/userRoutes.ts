import { UserController } from '../controllers/UserController';

export const userRoutes = (app) => {
  const userController = new UserController();

  app.post('/users', (req, res) => userController.createUser(req, res));
  // Additional routes for users
};
