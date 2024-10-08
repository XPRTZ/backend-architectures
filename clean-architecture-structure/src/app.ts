import express from 'express';
import { orderRoutes } from '../presentation/routes/orderRoutes';
import { userRoutes } from '../presentation/routes/userRoutes';
import { paymentRoutes } from '../presentation/routes/paymentRoutes';
import { membershipRoutes } from '../presentation/routes/membershipRoutes';

const app = express();

orderRoutes(app);
userRoutes(app);
paymentRoutes(app);
membershipRoutes(app);

export default app;
