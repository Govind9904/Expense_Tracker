import { View } from 'react-native';
import React from 'react';
import Text from '../../common/Text';
import styles from './RecentExpenseCard.styles';

interface RecentExpenseCardProps {
  title: string;
  amount: number;
}

const RecentExpenseCard = ({ title, amount }: RecentExpenseCardProps) => {
  return (
    <View style={styles.container}>
      <Text weight="semibold">{title}</Text>

      <Text>₹ {amount.toLocaleString()}</Text>
    </View>
  );
};

export default RecentExpenseCard;
