import { Request, Response } from 'express';
import { ProcessPaymentCommand } from '../../../application/commands/processPayment/ProcessPaymentCommand';
import { GetPaymentStatusQuery } from '../../../application/queries/getPaymentStatus/GetPaymentStatusQuery';
import { IPaymentService } from '../../../application/ports/IPaymentService';

export class PaymentController {
  constructor(private paymentService: IPaymentService) {}

  async processPayment(req: Request, res: Response): Promise<void> {
    try {
      const { paymentId, orderId, amount } = req.body;
      const command = new ProcessPaymentCommand(paymentId, orderId, amount);
      await this.paymentService.processPayment(command);
      res.status(200).json({ message: 'Payment processed successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getPaymentStatus(req: Request, res: Response): Promise<void> {
    try {
      const { paymentId } = req.params;
      const query = new GetPaymentStatusQuery(paymentId);
      const status = await this.paymentService.getPaymentStatus(query);
      if (status) {
        res.status(200).json({ status });
      } else {
        res.status(404).json({ message: 'Payment not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
