import { User } from '../models/User';

export class UserCreatedEvent {
  constructor(public user: User) {}
}
