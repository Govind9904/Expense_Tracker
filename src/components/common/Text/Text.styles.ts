import { StyleSheet, TextStyle } from 'react-native';

const styles = StyleSheet.create({
  base: {
    fontFamily: 'System',
  },
});

export const textSizes: Record<
  'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl',
  TextStyle
> = {
  xs: {
    fontSize: 12,
    lineHeight: 18,
  },
  sm: {
    fontSize: 14,
    lineHeight: 20,
  },
  md: {
    fontSize: 16,
    lineHeight: 24,
  },
  lg: {
    fontSize: 18,
    lineHeight: 26,
  },
  xl: {
    fontSize: 24,
    lineHeight: 32,
  },
  xxl: {
    fontSize: 32,
    lineHeight: 40,
  },
};

export const textWeights: Record<
  'regular' | 'medium' | 'semibold' | 'bold',
  TextStyle
> = {
  regular: {
    fontWeight: '400',
  },
  medium: {
    fontWeight: '500',
  },
  semibold: {
    fontWeight: '600',
  },
  bold: {
    fontWeight: '700',
  },
};

export default styles;