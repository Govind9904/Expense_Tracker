import api from './axios';

export const createExpense = (data: any) => {
  return api.post('/add/expense', data);
};

export const getExpenses = (data: any) => {
  return api.post('/expenses', data);
};

export const getMonthlyTotal = (data: any) => {
  return api.post('/expense/month', data);
};

export const getYearlyTotal = (data: any) => {
  return api.post('/expense/year', data);
};

export const getGraphData = (data: any) => {
  return api.post('/expense/graph', data);
};