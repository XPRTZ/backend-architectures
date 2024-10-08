import { Router } from 'express';
import { CustomerController } from '../controllers/CustomerController';
import { ICustomerService } from '../../../application/ports/ICustomerService';

export function createCustomerRoutes(customerService: ICustomerService): Router {
  const router = Router();
  const customerController = new CustomerController(customerService);

  router.post('/customers', customerController.registerCustomer.bind(customerController));
  router.put('/customers/:customerId', customerController.updateProfile.bind(customerController));
  router.get('/customers/:customerId', customerController.getCustomer.bind(customerController));

  return router;
}
