import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DashboardData, Expense } from '../../types/expense';

interface ExpenseState {
  expenses: Expense[];
  dashboard: DashboardData;
  loading: boolean;
  error: string | null;
}

const initialState: ExpenseState = {
  expenses: [],

  dashboard: {
    balance: 0,
    todayExpense: 0,
    monthlyExpense: 0,
    recentExpenses: [],
    graphData: [],
  },

  loading: false,
  error: null,
};

const expenseSlice = createSlice({
  name: 'expense',
  initialState,

  reducers: {
    setDashboard(state, action: PayloadAction<DashboardData>) {
      state.dashboard = action.payload;
    },

    setExpenses(state, action: PayloadAction<Expense[]>) {
      state.expenses = action.payload;
    },

    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },

    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },

    clearExpense(state) {
      state.expenses = [];

      state.dashboard = {
        balance: 0,
        todayExpense: 0,
        monthlyExpense: 0,
        recentExpenses: [],
        graphData: [],
      };

      state.loading = false;
      state.error = null;
    },
  },
});

export const { setDashboard, setExpenses, setLoading, setError, clearExpense } =
  expenseSlice.actions;

export default expenseSlice.reducer;
