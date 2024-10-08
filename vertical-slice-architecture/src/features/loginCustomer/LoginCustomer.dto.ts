export interface LoginCustomerDto {
  email: string;
  password: string;
}

export interface LoginCustomerResultDto {
  token: string;
  userId: string;
}
