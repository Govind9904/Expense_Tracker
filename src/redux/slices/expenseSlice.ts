import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
  name: 'expense',
  initialState: {
    expenses: [],
    monthlyTotal: 0,
    yearlyTotal: 0,
    graphData: [],
    loading: false,
    error: null,
  },
  reducers: {},
});

export default expenseSlice.reducer;