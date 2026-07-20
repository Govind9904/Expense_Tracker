import React from 'react';
import { View } from 'react-native';

import { LineChart } from 'react-native-chart-kit';

import styles from './ExpenseChart.styles';
import Colors from '../../../theme/colors';

import { GraphPoint } from '../../../types/expense';

interface ExpenseChartProps {
  data: GraphPoint[];
}

const ExpenseChart = ({ data }: ExpenseChartProps) => {
  if (!data.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: data.map(item => item.month),

          datasets: [
            {
              data: data.map(item => item.total),
            },
          ],
        }}
        width={330}
        height={220}
        chartConfig={{
          backgroundGradientFrom: Colors.surface,
          backgroundGradientTo: Colors.surface,

          decimalPlaces: 0,

          color: () => Colors.primary,

          labelColor: () => Colors.textSecondary,

          propsForDots: {
            r: '5',
          },
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

export default ExpenseChart;
