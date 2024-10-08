export interface ApplyDiscountDto {
  orderId: string;
  membershipId: string;
}

export interface ApplyDiscountResultDto {
  orderId: string;
  discountApplied: number;
  newTotalAmount: number;
}
