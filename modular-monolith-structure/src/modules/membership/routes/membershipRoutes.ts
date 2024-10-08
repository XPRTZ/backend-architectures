import { Router } from 'express';
import { MembershipController } from '../controllers/MembershipController';

export const membershipRoutes = (membershipController: MembershipController): Router => {
  const router = Router();

  // Define routes here

  return router;
};
