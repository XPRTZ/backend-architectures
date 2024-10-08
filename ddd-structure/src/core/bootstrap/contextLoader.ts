import { ContextRegistry, initializeContextRegistry } from './contextRegistry';
import { OrderingService } from '../../contexts/ordering/application/services/OrderingService';
import { CustomerService } from '../../contexts/customer/application/services/CustomerService';
import { PaymentService } from '../../contexts/payment/application/services/PaymentService';

export async function loadContexts(): Promise<void> {
  const orderingService = new OrderingService();
  const customerService = new CustomerService();
  const paymentService = new PaymentService();

  const registry: ContextRegistry = {
    orderingService,
    customerService,
    paymentService,
  };

  initializeContextRegistry(registry);
}
