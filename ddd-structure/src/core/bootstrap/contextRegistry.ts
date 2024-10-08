import { IOrderingService } from '../../contexts/ordering/application/ports/IOrderingService';
import { ICustomerService } from '../../contexts/customer/application/ports/ICustomerService';
import { IPaymentService } from '../../contexts/payment/application/ports/IPaymentService';

export interface ContextRegistry {
  orderingService: IOrderingService;
  customerService: ICustomerService;
  paymentService: IPaymentService;
}

export let contextRegistry: ContextRegistry;

export function initializeContextRegistry(registry: ContextRegistry) {
  contextRegistry = registry;
}
