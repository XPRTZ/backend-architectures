import { RequestHandler } from '../../shared/mediation/RequestHandler';
import { UpdateOrderStatusDto, UpdatedOrderDto } from './UpdateOrderStatus.dto';
import { Order } from '../../domain/Order';
import { runInTransaction } from '../../shared/database/Transaction';
import { UpdateOrderStatusMapper } from './UpdateOrderStatus.mapper';
import { AppError } from '../../shared/errors/AppError';

export class UpdateOrderStatusHandler implements RequestHandler<UpdateOrderStatusDto, UpdatedOrderDto> {
  constructor(private orderId: string, private dto: UpdateOrderStatusDto) {}

  async handle(): Promise<UpdatedOrderDto> {
    return runInTransaction(async (entityManager) => {
      const order = await entityManager.findOne(Order, this.orderId);
      if (!order) {
        throw new AppError('Order not found', 404);
      }
      
      order.status = this.dto.status;
      order.updatedAt = new Date();
      
      const updatedOrder = await entityManager.save(Order, order);
      return UpdateOrderStatusMapper.toDto(updatedOrder);
    });
  }
}
