export interface Expense {
  id: number;
  amount: number;
  description: string;
  date: string;
  categoryId: number;
  payment_mode: string;
  createdAt: string;
  updatedAt: string;
}

export interface GraphPoint {
  month: string;
  total: number;
}

export interface DashboardData {
  balance: number;
  todayExpense: number;
  monthlyExpense: number;
  recentExpenses: Expense[];
  graphData: GraphPoint[];
}

export interface AddExpensePayload {
  amount: number;
  description: string;
  date: string;
  category_id: number;
  payment_mode: string;
}

export interface UpdateExpensePayload extends AddExpensePayload {
  id: number;
}

export interface ExpenseListPayload {
  startDate?: string;
  endDate?: string;
  page: number;
  limit: number;
}
