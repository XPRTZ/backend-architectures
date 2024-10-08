import { Order } from '../../../../../../contexts/ordering/domain/aggregates/order/Order';
import { OrderId } from '../../../../../../contexts/ordering/domain/aggregates/order/OrderId';
import { OrderStatus } from '../../../../../../contexts/ordering/domain/aggregates/order/OrderStatus';
import { Money } from '../../../../../../contexts/ordering/domain/valueObjects/Money';
import { Address } from '../../../../../../contexts/ordering/domain/valueObjects/Address';

describe('Order', () => {
  it('should create a new order', () => {
    const orderId = new OrderId('123');
    const totalAmount = new Money(100);
    const deliveryAddress = new Address('123 Main St', 'Anytown', 'State', '12345');
    
    const order = new Order(orderId, totalAmount, deliveryAddress);
    
    expect(order.id).toEqual(orderId);
    expect(order.totalAmount).toEqual(totalAmount);
    expect(order.deliveryAddress).toEqual(deliveryAddress);
    expect(order.status).toEqual(OrderStatus.CREATED);
  });

  it('should change order status', () => {
    const order = new Order(
      new OrderId('123'),
      new Money(100),
      new Address('123 Main St', 'Anytown', 'State', '12345')
    );
    
    order.updateStatus(OrderStatus.PAID);
    
    expect(order.status).toEqual(OrderStatus.PAID);
  });

  // Add more tests as needed
});
