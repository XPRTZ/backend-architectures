import { RequestHandler } from '../../shared/mediation/RequestHandler';
import { CreateOrderDto, CreatedOrderDto } from './CreateOrder.dto';
import { Order } from '../../domain/Order';
import { runInTransaction } from '../../shared/database/Transaction';
import { CreateOrderMapper } from './CreateOrder.mapper';

export class CreateOrderHandler implements RequestHandler<CreateOrderDto, CreatedOrderDto> {
  constructor(private dto: CreateOrderDto) {}

  async handle(): Promise<CreatedOrderDto> {
    return runInTransaction(async (entityManager) => {
      const order = new Order(this.dto.customerId, this.dto.items, this.dto.total);
      const savedOrder = await entityManager.save(Order, order);
      return CreateOrderMapper.toDto(savedOrder);
    });
  }
}
