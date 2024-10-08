export const dateHelper = {
  formatDate: (date: Date): string => date.toISOString(),
  parseDate: (dateString: string): Date => new Date(dateString),
  addDays: (date: Date, days: number): Date => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  },
};
