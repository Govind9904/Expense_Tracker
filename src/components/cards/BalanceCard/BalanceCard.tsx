import { StyleSheet, View } from 'react-native';
import React from 'react';
import Text from '../../common/Text';
import styles from './BalanceCard.styles';
import { Colors } from '../../../theme';

interface BalanceCardProps {
  balance: number;
}

const BalanceCard = ({ balance }: BalanceCardProps) => {
  return (
    <View style={styles.container}>
      <Text size="sm" color={Colors.white}>
        Total Balance
      </Text>
      
      <Text size="xxl" weight="bold" color={Colors.white} style={styles.amount}>
        {balance.toLocaleString()}
      </Text>
    </View>
  );
};

export default BalanceCard;
