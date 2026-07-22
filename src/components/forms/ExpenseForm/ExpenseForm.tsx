import React, { useState } from 'react';
import { View } from 'react-native';

import Input from '../../common/Input';
import Button from '../../common/Button';
import Select from '../../common/Select';
import DatePicker from '../../common/DatePicker';
import Text from '../../common/Text';
import { SelectItem } from '../../common/Select';
import { AddExpensePayload } from '../../../types/expense';

import {
  validateExpense,
  ExpenseValidationErrors,
} from '../../../utils/validators/expenseValidator';

import { PAYMENT_MODES } from '../../../constants/expense';

import styles from './ExpenseForm.styles';

export interface CategoryOption {
  label: string;
  value: string | number;
}

interface ExpenseFormProps {
  categories: CategoryOption[];
  initialValues?: AddExpensePayload;
  loading?: boolean;
  buttonText?: string;
  onSubmit: (values: AddExpensePayload) => void;
}

const ExpenseForm = ({
  categories,
  initialValues,
  loading = false,
  buttonText = 'Save Expense',
  onSubmit,
}: ExpenseFormProps) => {
  const [amount, setAmount] = useState(initialValues?.amount?.toString() || '');

  const [description, setDescription] = useState(
    initialValues?.description || '',
  );

  const [categoryId, setCategoryId] = useState<number | null>(
    initialValues?.category_id || null,
  );

  const [paymentMode, setPaymentMode] = useState<string>(
    initialValues?.payment_mode || '',
  );

  const [date, setDate] = useState<Date | null>(
    initialValues?.date ? new Date(initialValues.date) : null,
  );

  const [errors, setErrors] = useState<ExpenseValidationErrors>({});

  const handleSubmit = () => {
    const payload: AddExpensePayload = {
      amount: Number(amount),

      description,

      category_id: categoryId || 0,

      payment_mode: paymentMode,

      date: date ? date.toISOString() : '',
    };

    const validation = validateExpense(payload);

    setErrors(validation);

    if (Object.keys(validation).length > 0) {
      return;
    }

    onSubmit(payload);
  };

  return (
    <View style={styles.container}>
      <Input
        label="Amount"
        placeholder="Enter amount"
        value={amount}
        keyboardType="numeric"
        onChangeText={setAmount}
        error={errors.amount}
      />

      <Input
        label="Description"
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
        error={errors.description}
        multiline
      />

      <Select
        label="Category"
        placeholder="Select Category"
        data={categories}
        value={categoryId}
        onChange={value => {
          setCategoryId(Number(value.value));
        }}
        error={errors.categoryId}
      />

      <Select
        label="Payment Mode"
        placeholder="Select Payment Mode"
        data={[...PAYMENT_MODES]}
        value={paymentMode}
        onChange={value => {
          setPaymentMode(String(value.value));
        }}
        error={errors.payment_mode}
      />

      <DatePicker
        label="Date"
        value={date}
        onChange={setDate}
        error={errors.date}
      />

      <Button title={buttonText} loading={loading} onPress={handleSubmit} />
    </View>
  );
};

export default ExpenseForm;
