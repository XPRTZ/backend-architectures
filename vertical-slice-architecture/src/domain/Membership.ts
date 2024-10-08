export class Membership {
  id: string;
  customerId: string;
  type: string;
  discountPercentage: number;
  startDate: Date;
  endDate: Date;

  constructor(id: string, customerId: string, type: string, discountPercentage: number, startDate: Date, endDate: Date) {
    this.id = id;
    this.customerId = customerId;
    this.type = type;
    this.discountPercentage = discountPercentage;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  isValid(): boolean {
    const now = new Date();
    return now >= this.startDate && now <= this.endDate;
  }
}
