export interface CreateOrderDto {
  userId: string;
  pizzaIds: string[];
  totalAmount: number;
}
