import { User } from '../../../src/core/entities/User';

describe('User Entity', () => {
  it('should create a user with default values', () => {
    const user = new User(/* constructor parameters */);
    expect(user.isActive).toBe(true);
  });

  // Add more tests for User entity methods and properties
});
