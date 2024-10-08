export interface CreateOrderDto {
  customerId: string;
  items: OrderItemDto[];
  total: number;
}

export interface OrderItemDto {
  productId: string;
  quantity: number;
}

export interface CreatedOrderDto {
  id: string;
  customerId: string;
  items: OrderItemDto[];
  total: number;
  createdAt: Date;
}
