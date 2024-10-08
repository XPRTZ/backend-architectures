import { ModuleRegistry } from '../../integration/moduleRegistry';

export const loadModules = () => {
  const moduleRegistry = ModuleRegistry.getInstance();

  // Register modules
  // moduleRegistry.registerModule(new OrderingModule());
  // moduleRegistry.registerModule(new CustomerModule());
  // moduleRegistry.registerModule(new PaymentModule());
  // moduleRegistry.registerModule(new MembershipModule());
};
