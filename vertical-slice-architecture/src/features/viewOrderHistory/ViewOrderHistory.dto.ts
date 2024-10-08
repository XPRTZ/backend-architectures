export interface ViewOrderHistoryDto {
  customerId: string;
  page: number;
  pageSize: number;
}

export interface OrderSummary {
  orderId: string;
  date: Date;
  totalAmount: number;
  status: string;
}

export interface ViewOrderHistoryResultDto {
  orders: OrderSummary[];
  totalOrders: number;
  currentPage: number;
  totalPages: number;
}
