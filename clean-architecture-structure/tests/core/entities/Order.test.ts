import { Order } from '../../../src/core/entities/Order';
import { OrderStatus } from '../../../src/core/types/OrderStatus.enum';

describe('Order Entity', () => {
  it('should create an order with default status', () => {
    const order = new Order(/* constructor parameters */);
    expect(order.status).toBe(OrderStatus.Pending);
  });

  // Add more tests for Order entity methods and properties
});
import { Order } from '../../../src/core/entities/Order';
import { OrderStatus } from '../../../src/core/types/OrderStatus.enum';

describe('Order Entity', () => {
  it('should create an order with default status', () => {
    const order = new Order(/* constructor parameters */);
    expect(order.status).toBe(OrderStatus.Pending);
  });

  // Add more tests for Order entity methods and properties
});
