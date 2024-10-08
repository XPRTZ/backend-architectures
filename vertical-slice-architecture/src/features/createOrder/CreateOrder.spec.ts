import { CreateOrder } from './CreateOrder';
import { Mediator } from '../../shared/mediation/Mediator';
import { CreateOrderDto } from './CreateOrder.dto';

describe('CreateOrder', () => {
  let createOrder: CreateOrder;
  let mediatorMock: jest.Mocked<Mediator>;

  beforeEach(() => {
    mediatorMock = {
      send: jest.fn(),
    } as any;
    createOrder = new CreateOrder(mediatorMock);
  });

  it('should create an order', async () => {
    const dto: CreateOrderDto = {
      customerId: '123',
      items: [{ productId: 'pizza1', quantity: 2 }],
      total: 20,
    };

    const expectedResult = {
      id: 'order1',
      ...dto,
      createdAt: expect.any(Date),
    };

    mediatorMock.send.mockResolvedValue(expectedResult);

    const result = await createOrder.execute(dto);

    expect(result).toEqual(expectedResult);
    expect(mediatorMock.send).toHaveBeenCalledWith(expect.any(Object));
  });
});
