import { View } from 'react-native';
import React from 'react';
import Text from '../Text';
import Button from '../Button';

import styles from './EmptyState.styles';

import { Colors } from '../../../theme';

export interface EmptyStateProps {
  title: String;
  description?: string;
  icon?: React.ReactNode;
  actionTitle: string;
  onAction?: () => void;
}

const EmptyState = ({
  title,
  description,
  icon,
  actionTitle,
  onAction,
}: EmptyStateProps) => {
  return (
    <View style={styles.container}>
      {icon && <View style={styles.iconContainer}>{icon}</View>}

      <Text size="xl" weight="bold" align="center" style={styles.title}>
        {title}
      </Text>

      {description ? (
        <Text
          size="md"
          align="center"
          color={Colors.textSecondary}
          style={styles.description}
        >
          {description}
        </Text>
      ) : null}

      {actionTitle && onAction ? (
        <Button title={actionTitle} onPress={onAction} fullWidth={false} />
      ) : null}
    </View>
  );
};

export default EmptyState;
