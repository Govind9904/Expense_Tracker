import { View } from 'react-native'
import React from 'react'
import Text from '../../common/Text';
import styles from './ExpenseSummaryCard.styles';


interface ExpenseSummaryCardProps {
    title : string,
    amount : number
}

const ExpenseSummaryCard = ({title,amount}:ExpenseSummaryCardProps) => {
  return (
    <View style={styles.container}>
        <Text size='sm'>{title}</Text>
        <Text size='lg' weight='bold' style={styles.amount}>{amount.toLocaleString()}</Text>
    </View>
  )
}

export default ExpenseSummaryCard