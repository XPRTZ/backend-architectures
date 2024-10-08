import { Request, Response } from 'express';
import { ICustomerService } from '../../../application/ports/ICustomerService';
import { RegisterCustomerCommand } from '../../../application/commands/registerCustomer/RegisterCustomerCommand';
import { UpdateProfileCommand } from '../../../application/commands/updateProfile/UpdateProfileCommand';

export class CustomerController {
  constructor(private customerService: ICustomerService) {}

  async registerCustomer(req: Request, res: Response): Promise<void> {
    try {
      const { firstName, lastName, email, phoneNumber } = req.body;
      const command = new RegisterCustomerCommand(firstName, lastName, email, phoneNumber);
      const customerId = await this.customerService.registerCustomer(command);
      res.status(201).json({ customerId });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateProfile(req: Request, res: Response): Promise<void> {
    try {
      const { customerId } = req.params;
      const { firstName, lastName, email, phoneNumber } = req.body;
      const command = new UpdateProfileCommand(customerId, firstName, lastName, email, phoneNumber);
      await this.customerService.updateProfile(command);
      res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getCustomer(req: Request, res: Response): Promise<void> {
    try {
      const { customerId } = req.params;
      const customer = await this.customerService.getCustomer(customerId);
      if (customer) {
        res.status(200).json(customer);
      } else {
        res.status(404).json({ message: 'Customer not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
