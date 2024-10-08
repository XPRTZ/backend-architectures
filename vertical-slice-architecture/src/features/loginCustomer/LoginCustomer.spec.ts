import { LoginCustomer } from './LoginCustomer';
import { Mediator } from '../../shared/mediation/Mediator';
import { LoginCustomerDto } from './LoginCustomer.dto';

describe('LoginCustomer', () => {
  let loginCustomer: LoginCustomer;
  let mediatorMock: jest.Mocked<Mediator>;

  beforeEach(() => {
    mediatorMock = {
      send: jest.fn(),
    } as any;
    loginCustomer = new LoginCustomer(mediatorMock);
  });

  it('should login customer successfully', async () => {
    const dto: LoginCustomerDto = {
      email: 'test@example.com',
      password: 'password123',
    };

    const expectedResult = {
      token: 'dummy_token',
      userId: 'user_123',
    };

    mediatorMock.send.mockResolvedValue(expectedResult);

    const result = await loginCustomer.execute(dto);

    expect(result).toEqual(expectedResult);
    expect(mediatorMock.send).toHaveBeenCalledTimes(1);
  });
});
