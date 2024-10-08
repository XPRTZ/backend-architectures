export interface UnitOfWork {
  begin(): Promise<void>;
  commit(): Promise<void>;
  rollback(): Promise<void>;
}

export class DatabaseUnitOfWork implements UnitOfWork {
  async begin(): Promise<void> {
    // Start a database transaction
    console.log('Starting transaction');
  }

  async commit(): Promise<void> {
    // Commit the database transaction
    console.log('Committing transaction');
  }

  async rollback(): Promise<void> {
    // Rollback the database transaction
    console.log('Rolling back transaction');
  }
}
