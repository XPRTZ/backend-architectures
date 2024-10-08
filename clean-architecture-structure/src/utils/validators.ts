export class Validators {
  static isValidEmail(email: string): boolean {
    // Simple email validation logic
    return /\S+@\S+\.\S+/.test(email);
  }
}
