import express from 'express';
import { loadContexts } from './core/bootstrap/contextLoader';
import { contextRegistry } from './core/bootstrap/contextRegistry';
import { createOrderRoutes } from './contexts/ordering/interface/api/routes/orderRoutes';
import { createCustomerRoutes } from './contexts/customer/interface/api/routes/customerRoutes';
import { createPaymentRoutes } from './contexts/payment/interface/api/routes/paymentRoutes';
import { errorHandler } from './core/middleware/errorHandler';
import { authenticate } from './core/middleware/authentication';
import { loggingMiddleware } from './core/middleware/logging';
import { ConsoleLogger } from './shared/infrastructure/logging/Logger';

export async function createApp() {
  await loadContexts();

  const app = express();
  const logger = new ConsoleLogger();

  app.use(express.json());
  app.use(loggingMiddleware(logger));

  // Public routes
  app.use('/api/customers', createCustomerRoutes(contextRegistry.customerService));

  // Protected routes
  app.use('/api/orders', authenticate(/* Provide JWT service */), createOrderRoutes(contextRegistry.orderingService));
  app.use('/api/payments', authenticate(/* Provide JWT service */), createPaymentRoutes(contextRegistry.paymentService));

  app.use(errorHandler(logger));

  return app;
}
