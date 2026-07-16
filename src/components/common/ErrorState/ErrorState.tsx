import React from 'react';
import { View } from 'react-native';

import Text from '../Text';
import Button from '../Button';

import styles from './Error.styles';

import Colors from '../../../theme/colors';

interface ErrorStateProps {
  message?: string;

  onRetry: () => void;
}

const ErrorState = ({
  message = 'Something went wrong',
  onRetry,
}: ErrorStateProps) => {
  return (
    <View style={styles.container}>
      <Text size="xl" weight="bold" align="center">
        ⚠️
      </Text>

      <Text
        size="md"
        color={Colors.textSecondary}
        align="center"
        style={styles.message}
      >
        {message}
      </Text>

      <Button title="Try Again" onPress={onRetry} fullWidth={false} />
    </View>
  );
};

export default ErrorState;
