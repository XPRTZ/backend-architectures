import { OrderController } from '../../../../../../contexts/ordering/interface/api/controllers/OrderController';
import { CreateOrderCommand } from '../../../../../../contexts/ordering/application/commands/createOrder/CreateOrderCommand';
import { GetOrderQuery } from '../../../../../../contexts/ordering/application/queries/getOrder/GetOrderQuery';
import { IOrderingService } from '../../../../../../contexts/ordering/application/ports/IOrderingService';

describe('OrderController', () => {
  let orderController: OrderController;
  let mockOrderingService: jest.Mocked<IOrderingService>;

  beforeEach(() => {
    mockOrderingService = {
      createOrder: jest.fn(),
      getOrder: jest.fn(),
      // ... other methods
    };
    orderController = new OrderController(mockOrderingService);
  });

  it('should create an order', async () => {
    const createOrderDto = {
      totalAmount: 100,
      street: '123 Main St',
      city: 'Anytown',
      state: 'State',
      zipCode: '12345'
    };

    await orderController.createOrder(createOrderDto);

    expect(mockOrderingService.createOrder).toHaveBeenCalledWith(
      expect.any(CreateOrderCommand)
    );
  });

  it('should get an order', async () => {
    const orderId = '123';
    const mockOrder = { /* mock order data */ };

    mockOrderingService.getOrder.mockResolvedValue(mockOrder);

    const result = await orderController.getOrder(orderId);

    expect(mockOrderingService.getOrder).toHaveBeenCalledWith(
      expect.any(GetOrderQuery)
    );
    expect(result).toEqual(mockOrder);
  });

  // Add more tests as needed
});
