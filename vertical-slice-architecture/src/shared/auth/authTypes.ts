export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'admin';
}

export interface AuthToken {
  token: string;
  expiresAt: Date;
}
