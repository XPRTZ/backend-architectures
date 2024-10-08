import { OrderStatus } from '../../domain/types/OrderStatus';

export interface UpdateOrderStatusDto {
  status: OrderStatus;
}

export interface UpdatedOrderDto {
  id: string;
  status: OrderStatus;
  updatedAt: Date;
}
