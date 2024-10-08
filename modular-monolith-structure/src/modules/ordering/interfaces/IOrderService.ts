import { IService } from '../../../shared/interfaces/IService';
import { Order } from '../models/Order';

export interface IOrderService extends IService<Order> {
  // Add any additional methods specific to OrderService
}
