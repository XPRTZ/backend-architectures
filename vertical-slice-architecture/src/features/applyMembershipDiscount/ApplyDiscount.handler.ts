import { RequestHandler } from '../../shared/mediation/RequestHandler';
import { ApplyDiscountDto, ApplyDiscountResultDto } from './ApplyDiscount.dto';
import { AppError } from '../../shared/errors/AppError';

export class ApplyDiscountHandler implements RequestHandler<ApplyDiscountDto, ApplyDiscountResultDto> {
  constructor(private dto: ApplyDiscountDto) {}

  async handle(): Promise<ApplyDiscountResultDto> {
    // Implement the business logic for applying a membership discount
    // This is a placeholder implementation
    const discountApplied = 10; // Example: $10 discount
    const newTotalAmount = 90; // Example: new total after discount

    if (discountApplied <= 0) {
      throw new AppError('No discount could be applied', 400);
    }

    return {
      orderId: this.dto.orderId,
      discountApplied,
      newTotalAmount,
    };
  }
}
