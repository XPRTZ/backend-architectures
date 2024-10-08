export interface ProcessPaymentDto {
  orderId: string;
  amount: number;
  paymentMethod: string;
}

export interface ProcessPaymentResultDto {
  orderId: string;
  transactionId: string;
  status: 'success' | 'failure';
  message: string;
}
