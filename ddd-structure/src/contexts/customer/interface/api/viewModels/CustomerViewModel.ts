import { CustomerDTO } from '../../../application/dtos/CustomerDTO';

export class CustomerViewModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  loyaltyPoints: number;

  constructor(customerDTO: CustomerDTO) {
    this.id = customerDTO.id;
    this.firstName = customerDTO.firstName;
    this.lastName = customerDTO.lastName;
    this.email = customerDTO.email;
    this.phoneNumber = customerDTO.phoneNumber;
    this.loyaltyPoints = customerDTO.loyaltyPoints;
  }
}
