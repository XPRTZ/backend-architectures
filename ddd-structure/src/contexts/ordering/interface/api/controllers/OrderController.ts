import { Request, Response } from 'express';
import { CreateOrderCommand } from '../../../application/commands/createOrder/CreateOrderCommand';
import { UpdateOrderCommand } from '../../../application/commands/updateOrder/UpdateOrderCommand';
import { GetOrderQuery } from '../../../application/queries/getOrder/GetOrderQuery';
import { IOrderingService } from '../../../application/ports/IOrderingService';

export class OrderController {
  constructor(private orderingService: IOrderingService) {}

  async createOrder(req: Request, res: Response): Promise<void> {
    try {
      const { customerId, pizzas, deliveryAddress } = req.body;
      const command = new CreateOrderCommand(customerId, pizzas, deliveryAddress);
      const orderId = await this.orderingService.createOrder(command);
      res.status(201).json({ orderId });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateOrder(req: Request, res: Response): Promise<void> {
    try {
      const { orderId } = req.params;
      const { newStatus } = req.body;
      const command = new UpdateOrderCommand(orderId, newStatus);
      await this.orderingService.updateOrder(command);
      res.status(200).json({ message: 'Order updated successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getOrder(req: Request, res: Response): Promise<void> {
    try {
      const { orderId } = req.params;
      const query = new GetOrderQuery(orderId);
      const order = await this.orderingService.getOrder(orderId);
      if (order) {
        res.status(200).json(order);
      } else {
        res.status(404).json({ message: 'Order not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
