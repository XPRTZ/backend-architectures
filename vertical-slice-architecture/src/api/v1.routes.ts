import express from 'express';
import { createOrderRoutes } from '../features/createOrder/createOrder.routes';
import { updateOrderStatusRoutes } from '../features/updateOrderStatus/updateOrderStatus.routes';
import { registerCustomerRoutes } from '../features/registerCustomer/registerCustomer.routes';
import { loginCustomerRoutes } from '../features/loginCustomer/loginCustomer.routes';
import { processPaymentRoutes } from '../features/processPayment/processPayment.routes';
import { viewOrderHistoryRoutes } from '../features/viewOrderHistory/viewOrderHistory.routes';
import { applyDiscountRoutes } from '../features/applyMembershipDiscount/applyDiscount.routes';

const router = express.Router();

router.use('/orders', createOrderRoutes);
router.use('/orders', updateOrderStatusRoutes);
router.use('/customers', registerCustomerRoutes);
router.use('/auth', loginCustomerRoutes);
router.use('/payments', processPaymentRoutes);
router.use('/orders', viewOrderHistoryRoutes);
router.use('/discounts', applyDiscountRoutes);

export default router;
