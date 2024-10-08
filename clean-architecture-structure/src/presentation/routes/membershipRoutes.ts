import { MembershipController } from '../controllers/MembershipController';

export const membershipRoutes = (app) => {
  const membershipController = new MembershipController();

  app.post('/memberships', (req, res) => membershipController.manageMembership(req, res));
  // Additional routes for memberships
};
