import { Mediator } from '../shared/mediation/Mediator';
import { CreateOrderHandler } from '../features/createOrder/CreateOrder.handler';
import { UpdateOrderStatusHandler } from '../features/updateOrderStatus/UpdateOrderStatus.handler';
import { RegisterCustomerHandler } from '../features/registerCustomer/RegisterCustomer.handler';
import { LoginCustomerHandler } from '../features/loginCustomer/LoginCustomer.handler';
import { ProcessPaymentHandler } from '../features/processPayment/ProcessPayment.handler';
import { ViewOrderHistoryHandler } from '../features/viewOrderHistory/ViewOrderHistory.handler';
import { ApplyDiscountHandler } from '../features/applyMembershipDiscount/ApplyDiscount.handler';

export function registerFeatures(mediator: Mediator) {
  mediator.register(CreateOrderHandler.name, new CreateOrderHandler().handle);
  mediator.register(UpdateOrderStatusHandler.name, new UpdateOrderStatusHandler().handle);
  mediator.register(RegisterCustomerHandler.name, new RegisterCustomerHandler().handle);
  mediator.register(LoginCustomerHandler.name, new LoginCustomerHandler().handle);
  mediator.register(ProcessPaymentHandler.name, new ProcessPaymentHandler().handle);
  mediator.register(ViewOrderHistoryHandler.name, new ViewOrderHistoryHandler().handle);
  mediator.register(ApplyDiscountHandler.name, new ApplyDiscountHandler().handle);
}
