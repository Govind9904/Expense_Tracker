import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getExpenses,
  getMonthlyTotal,
  getYearlyTotal,
  getGraphData,
  createExpense,
} from '../../api/expenseApi';
import {
  setDashboard,
  setExpenses,
  setError,
  setLoading,
} from '../slices/expenseSlice';
import { AddExpensePayload, DashboardData } from '../../types/expense';

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
      const graph = graphResopnse.data.graphData;
      const dashboard: DashboardData = {
        balance: 0,
        todayExpense: 0,
        monthlyExpense: 0,
        recentExpenses: expenses.slice(0, 5),
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

export const addExpense = createAsyncThunk('expense/addExpense',
  async(payload : AddExpensePayload,{dispatch,rejectWithValue}) => {
    try{
      dispatch(setLoading(true));

      const response = await createExpense(payload);

      // Refresh Dashboard After successful Createtion
      await dispatch(fetchDashboardData({}));

      dispatch(setLoading(false));

      return response.data;
    }
    catch(error : any){
      dispatch(
        setError(
          error.response?.data?.message ?? 'Failed to add expense',
        )
      )
      dispatch(setLoading(false));

      return rejectWithValue(error.response?.data)
    }
  }
)