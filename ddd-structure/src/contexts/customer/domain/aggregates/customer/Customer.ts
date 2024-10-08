import { CustomerId } from './CustomerId';
import { CustomerProfile } from './CustomerProfile';
import { LoyaltyPoints } from './LoyaltyPoints';
import { CustomerRegisteredDomainEvent } from './events/CustomerRegisteredDomainEvent';

export class Customer {
  private _id: CustomerId;
  private _profile: CustomerProfile;
  private _loyaltyPoints: LoyaltyPoints;

  constructor(id: CustomerId, profile: CustomerProfile) {
    this._id = id;
    this._profile = profile;
    this._loyaltyPoints = new LoyaltyPoints(0);

    new CustomerRegisteredDomainEvent(this);
  }

  get id(): CustomerId {
    return this._id;
  }

  get profile(): CustomerProfile {
    return this._profile;
  }

  get loyaltyPoints(): LoyaltyPoints {
    return this._loyaltyPoints;
  }

  updateProfile(profile: CustomerProfile): void {
    this._profile = profile;
  }

  addLoyaltyPoints(points: number): void {
    this._loyaltyPoints = this._loyaltyPoints.add(points);
  }
}
