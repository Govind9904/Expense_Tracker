import React from 'react';
import {View} from 'react-native';

import Skeleton from '../../common/Skeleton';

import styles from './DashboardSkeleton.styles';

const DashboardSkeleton = () => {
  return (
    <View style={styles.container}>

      {/* Header */}
      <Skeleton
        width={140}
        height={24}
        borderRadius={8}
        style={styles.header}
      />


      {/* Balance Card */}
      <View style={styles.balanceCard}>
        <Skeleton
          width={120}
          height={16}
          borderRadius={8}
        />

        <Skeleton
          width={180}
          height={36}
          borderRadius={10}
          style={styles.balanceAmount}
        />
      </View>


      {/* Summary Cards */}
      <View style={styles.row}>

        <View style={styles.smallCard}>
          <Skeleton
            width={80}
            height={14}
            borderRadius={8}
          />

          <Skeleton
            width={100}
            height={28}
            borderRadius={8}
            style={styles.cardValue}
          />
        </View>


        <View style={styles.smallCard}>
          <Skeleton
            width={80}
            height={14}
            borderRadius={8}
          />

          <Skeleton
            width={100}
            height={28}
            borderRadius={8}
            style={styles.cardValue}
          />
        </View>

      </View>


      {/* Chart */}
      <View style={styles.chartCard}>
        <Skeleton
          height={220}
          borderRadius={16}
        />
      </View>


      {/* Recent Expense */}
      <View style={styles.recentCard}>

        <Skeleton
          width={160}
          height={20}
          borderRadius={8}
        />

        {[1,2,3].map(item => (
          <Skeleton
            key={item}
            height={55}
            borderRadius={12}
            style={styles.listItem}
          />
        ))}

      </View>


    </View>
  );
};

export default DashboardSkeleton;