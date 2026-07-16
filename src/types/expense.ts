export interface Expense {
  id: number;
  title: string;
  amount: number;
  category: string;
  date: string;
}

export interface GraphPoint {
  label: string;
  value: number;
}

export interface DashboardData {
  balance: number;
  todayExpense: number;
  monthlyExpense: number;
  recentExpenses: Expense[];
  graphData: GraphPoint[];
}