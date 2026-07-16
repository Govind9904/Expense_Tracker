import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getExpenses,
  getMonthlyTotal,
  getYearlyTotal,
  getGraphData,
} from '../../api/expenseApi';
import {
  setDashboard,
  setExpenses,
  setError,
  setLoading,
} from '../slices/expenseSlice';
import { DashboardData } from '../../types/expense';

export const fetchDashboardData = createAsyncThunk(
  'expense/fetchDashboardData',
  async (data: any, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));

      const [expensesResponse, monthlyResponse, yearlyResponse, graphResopnse] =
        await Promise.all([
          getExpenses(data),
          getMonthlyTotal(data),
          getYearlyTotal(data),
          getGraphData(data),
        ]);

      const expenses = expensesResponse.data;
      const monthly = monthlyResponse.data;
      const graph = graphResopnse.data;
      const dashboard: DashboardData = {
        balance: 0,
        todayExpense: 0,
        monthlyExpense: 0,
        recentExpenses: monthly.total ?? 0,
        graphData: graph,
      };

      dispatch(setExpenses(expenses));

      dispatch(setDashboard(dashboard));

      dispatch(setLoading(false));

      return dashboard;
    } catch (error: any) {
      dispatch(
        setError(error.response?.data?.message || 'Something went wrong'),
      );

      dispatch(setLoading(false));

      return rejectWithValue(error);
    }
  },
);
