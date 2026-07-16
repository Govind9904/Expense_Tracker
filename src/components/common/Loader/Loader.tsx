import React from 'react';

import { ActivityIndicator, View } from 'react-native';

import styles from './Loader.styles';

import Colors from '../../../theme/colors';

interface LoaderProps {
  size?: 'small' | 'large';

  color?: string;
}

const Loader = ({ size = 'large', color = Colors.primary }: LoaderProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loader;
