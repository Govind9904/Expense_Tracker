import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import ScreenContainer from '../../components/common/ScreenContainer';
import Text from '../../components/common/Text';

import BalanceCard from '../../components/cards/BalanceCard';
import ExpenseSummaryCard from '../../components/cards/ExpenseSummaryCard';
import RecentExpenseCard from '../../components/cards/RecentExpenseCard';

import styles from './Home.styles';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchDashboardData } from '../../redux/thunks/expenseThunk';

import Loader from '../../components/common/Loader';
import ErrorState from '../../components/common/ErrorState';

import ExpenseChart from '../../components/charts/ExpenseChart';
import DashboardSkeleton from '../../components/dashboard/DashboardSkeleton/DashboardSkeleton';

const HomeScreen = () => {
  const user = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const { dashboard, loading, error } = useAppSelector(state => state.expense);

  useEffect(() => {
    dispatch(fetchDashboardData({}));
  }, [dispatch]);

  const handleRefresh = async () => {
    setRefreshing(true);

    try {
      await dispatch(fetchDashboardData({})).unwrap();
    } finally {
      setRefreshing(false);
    }
  };

  if (loading) {
    return (
      <ScreenContainer>
        <DashboardSkeleton />
      </ScreenContainer>
    );
  }

  if (error) {
    return (
      <ScreenContainer>
        <ErrorState
          message={error ?? 'Something went wrong'}
          onRetry={() => dispatch(fetchDashboardData({}))}
        />
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer refreshing={refreshing} onRefresh={handleRefresh}>
      <View style={styles.container}>
        {/* Header */}

        <View style={styles.header}>
          <Text size="sm">Good Morning 👋</Text>

          <Text size="xl" weight="bold">
            {user?.first_name ?? 'User'}
          </Text>
        </View>

        {/* Balance */}

        <BalanceCard balance={dashboard.balance} />

        <ExpenseChart data={dashboard.graphData} />

        {/* Summary */}

        <View style={styles.summaryRow}>
          <ExpenseSummaryCard title="Today" amount={dashboard.todayExpense} />

          <ExpenseSummaryCard
            title="This Month"
            amount={dashboard.monthlyExpense}
          />
        </View>

        {/* Recent */}

        <Text size="lg" weight="bold" style={styles.sectionTitle}>
          Recent Expenses
        </Text>
        {dashboard.recentExpenses.map(item => (
          <RecentExpenseCard
            key={item.id}
            title={item.description}
            amount={item.amount}
          />
        ))}
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;
