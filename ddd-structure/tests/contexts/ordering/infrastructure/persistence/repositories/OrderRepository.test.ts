import { OrderRepository } from '../../../../../../contexts/ordering/infrastructure/persistence/repositories/OrderRepository';
import { Order } from '../../../../../../contexts/ordering/domain/aggregates/order/Order';
import { OrderId } from '../../../../../../contexts/ordering/domain/aggregates/order/OrderId';
import { Money } from '../../../../../../contexts/ordering/domain/valueObjects/Money';
import { Address } from '../../../../../../contexts/ordering/domain/valueObjects/Address';

describe('OrderRepository', () => {
  let orderRepository: OrderRepository;

  beforeEach(() => {
    // Initialize the repository with a mock database connection
    orderRepository = new OrderRepository(/* mock database connection */);
  });

  it('should save an order', async () => {
    const order = new Order(
      new OrderId('123'),
      new Money(100),
      new Address('123 Main St', 'Anytown', 'State', '12345')
    );

    await orderRepository.save(order);

    // Assert that the order was saved correctly
    const savedOrder = await orderRepository.findById(order.id);
    expect(savedOrder).toEqual(order);
  });

  it('should find an order by id', async () => {
    const orderId = new OrderId('123');
    const order = new Order(
      orderId,
      new Money(100),
      new Address('123 Main St', 'Anytown', 'State', '12345')
    );

    await orderRepository.save(order);

    const foundOrder = await orderRepository.findById(orderId);
    expect(foundOrder).toEqual(order);
  });

  // Add more tests as needed
});
