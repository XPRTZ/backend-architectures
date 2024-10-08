import { Order } from '../../../domain/aggregates/order/Order';

export class OrderMapping {
  static toPersistence(order: Order): any {
    // Convert Order domain object to persistence model
    // This is a placeholder and should be implemented based on your persistence strategy
    return {
      id: order.id.value,
      customerId: order.customerId,
      status: order.status,
      totalAmount: order.totalAmount.amount,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
      // Map other properties as needed
    };
  }

  static toDomain(raw: any): Order {
    // Convert persistence model to Order domain object
    // This is a placeholder and should be implemented based on your persistence strategy
    // You'll need to reconstruct the Order object with its full structure
    return new Order(
      raw.id,
      raw.customerId,
      [], // You'll need to reconstruct OrderItems here
      raw.deliveryAddress
    );
  }
}
