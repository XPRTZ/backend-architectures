import { ApplyDiscount } from './ApplyDiscount';
import { Mediator } from '../../shared/mediation/Mediator';
import { ApplyDiscountDto } from './ApplyDiscount.dto';

describe('ApplyDiscount', () => {
  let applyDiscount: ApplyDiscount;
  let mediatorMock: jest.Mocked<Mediator>;

  beforeEach(() => {
    mediatorMock = {
      send: jest.fn(),
    } as any;
    applyDiscount = new ApplyDiscount(mediatorMock);
  });

  it('should apply discount successfully', async () => {
    const dto: ApplyDiscountDto = {
      orderId: '123',
      membershipId: '456',
    };

    const expectedResult = {
      orderId: '123',
      discountApplied: 10,
      newTotalAmount: 90,
    };

    mediatorMock.send.mockResolvedValue(expectedResult);

    const result = await applyDiscount.execute(dto);

    expect(result).toEqual(expectedResult);
    expect(mediatorMock.send).toHaveBeenCalledTimes(1);
  });
});
