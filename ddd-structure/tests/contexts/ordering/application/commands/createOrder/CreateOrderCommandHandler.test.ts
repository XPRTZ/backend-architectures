import { CreateOrderCommandHandler } from '../../../../../../contexts/ordering/application/commands/createOrder/CreateOrderCommandHandler';
import { CreateOrderCommand } from '../../../../../../contexts/ordering/application/commands/createOrder/CreateOrderCommand';
import { IOrderRepository } from '../../../../../../contexts/ordering/domain/repositories/IOrderRepository';
import { Order } from '../../../../../../contexts/ordering/domain/aggregates/order/Order';
import { Money } from '../../../../../../contexts/ordering/domain/valueObjects/Money';
import { Address } from '../../../../../../contexts/ordering/domain/valueObjects/Address';

describe('CreateOrderCommandHandler', () => {
  let orderRepository: jest.Mocked<IOrderRepository>;
  let createOrderCommandHandler: CreateOrderCommandHandler;

  beforeEach(() => {
    orderRepository = {
      save: jest.fn(),
      findById: jest.fn(),
      // ... other methods
    };
    createOrderCommandHandler = new CreateOrderCommandHandler(orderRepository);
  });

  it('should create a new order', async () => {
    const command = new CreateOrderCommand(
      100,
      '123 Main St',
      'Anytown',
      'State',
      '12345'
    );

    await createOrderCommandHandler.execute(command);

    expect(orderRepository.save).toHaveBeenCalledWith(expect.any(Order));
    const savedOrder = (orderRepository.save as jest.Mock).mock.calls[0][0];
    expect(savedOrder.totalAmount).toEqual(new Money(100));
    expect(savedOrder.deliveryAddress).toEqual(new Address('123 Main St', 'Anytown', 'State', '12345'));
  });

  // Add more tests as needed
});
