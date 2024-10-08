import { EntityManager, getManager } from 'typeorm';

export async function runInTransaction<T>(
  operation: (entityManager: EntityManager) => Promise<T>
): Promise<T> {
  const entityManager = getManager();
  
  try {
    await entityManager.queryRunner?.startTransaction();
    const result = await operation(entityManager);
    await entityManager.queryRunner?.commitTransaction();
    return result;
  } catch (error) {
    await entityManager.queryRunner?.rollbackTransaction();
    throw error;
  }
}
