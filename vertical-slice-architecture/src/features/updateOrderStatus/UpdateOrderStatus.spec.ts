import { UpdateOrderStatus } from './UpdateOrderStatus';
import { Mediator } from '../../shared/mediation/Mediator';
import { UpdateOrderStatusDto } from './UpdateOrderStatus.dto';
import { OrderStatus } from '../../domain/types/OrderStatus';

describe('UpdateOrderStatus', () => {
  let updateOrderStatus: UpdateOrderStatus;
  let mediatorMock: jest.Mocked<Mediator>;

  beforeEach(() => {
    mediatorMock = {
      send: jest.fn(),
    } as any;
    updateOrderStatus = new UpdateOrderStatus(mediatorMock);
  });

  it('should update order status', async () => {
    const orderId = 'order1';
    const dto: UpdateOrderStatusDto = {
      status: OrderStatus.PROCESSING,
    };

    const expectedResult = {
      id: orderId,
      status: OrderStatus.PROCESSING,
      updatedAt: expect.any(Date),
    };

    mediatorMock.send.mockResolvedValue(expectedResult);

    const result = await updateOrderStatus.execute(orderId, dto);

    expect(result).toEqual(expectedResult);
    expect(mediatorMock.send).toHaveBeenCalledWith(expect.any(Object));
  });
});
