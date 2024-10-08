export interface RegisterCustomerDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface RegisterCustomerResultDto {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
}
