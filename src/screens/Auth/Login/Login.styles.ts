import { StyleSheet } from 'react-native';

import Colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xxl,
  },

  header: {
    marginBottom: spacing.xxxl ?? 48,
  },

  subtitle: {
    marginTop: spacing.sm,
    lineHeight: 22,
  },

  form: {
    marginBottom: spacing.xl,
  },

  forgotButton: {
    alignSelf: 'flex-end',
    marginBottom: spacing.lg,
    marginTop: -spacing.sm,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.xl,
  },
});