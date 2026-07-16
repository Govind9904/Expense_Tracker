import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
} from 'react-native';

import styles, { textSizes, textWeights } from './Text.styles';
import Colors from '../../../theme/colors';

export interface TextProps extends RNTextProps {
  children: React.ReactNode;

  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

  weight?: 'regular' | 'medium' | 'semibold' | 'bold';

  color?: string;

  align?: 'left' | 'center' | 'right';

  style?: StyleProp<TextStyle>;
}

const Text = ({
  children,
  size = 'md',
  weight = 'regular',
  color = Colors.textPrimary,
  align = 'left',
  style,
  ...props
}: TextProps) => {
  return (
    <RNText
      style={[
        styles.base,
        textSizes[size],
        textWeights[weight],
        {
          color,
          textAlign: align,
        },
        style,
      ]}
    >
      {children}
    </RNText>
  );
};

export default Text;
