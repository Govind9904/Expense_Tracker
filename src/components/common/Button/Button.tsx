import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  ViewStyle,
} from 'react-native';

import styles from './Button.styles';
import Colors from '../../../theme/colors';
import Text from '../Text';

export interface ButtonProps {
  title: string;
  onPress: () => void;

  variant?: 'primary' | 'secondary' | 'outline';

  loading?: boolean;

  disabled?: boolean;

  fullWidth?: boolean;

  style?: ViewStyle;
}

const Button = ({
  title,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
  fullWidth = true,
  style,
}: ButtonProps) => {
  const buttonStyles = [
    styles.button,
    styles[variant],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    style,
  ];

  const textColor =
    variant === 'outline'
      ? Colors.primary
      : Colors.white;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled || loading}
      onPress={onPress}
      style={buttonStyles}>
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Text
          weight="semibold"
          size="md"
          color={textColor}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;