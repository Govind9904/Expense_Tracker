import { AddExpensePayload } from '../../types/expense';

export interface ExpenseValidationErrors {
  amount?: string;
  description?: string;
  date?: string;
  categoryId?: string;
  payment_mode?: string;
}

export const validateExpense = (
  values: AddExpensePayload,
): ExpenseValidationErrors => {
  const errors: ExpenseValidationErrors = {};

  if (!values.amount || values.amount <= 0) {
    errors.amount = 'Please enter a valid amount.';
  }

  if (!values.description.trim()) {
    errors.description = 'Description is required.';
  }

  if (!values.category_id) {
    errors.categoryId = 'Please select a category.';
  }

  if (!values.date) {
    errors.date = 'Please select a date.';
  }

  if (!values.payment_mode) {
    errors.payment_mode = 'Please select a payment mode.';
  }

  return errors;
};
