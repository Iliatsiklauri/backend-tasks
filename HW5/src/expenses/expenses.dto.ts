export type ExpensesDTO = {
  category: string;
  price: number;
};
export type updateExpense = {
  id: number;
  category?: string;
  price?: number;
};
