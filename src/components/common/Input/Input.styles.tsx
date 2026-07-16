import { StyleSheet } from 'react-native';

import colors from '../../../theme/colors';
import radius from '../../../theme/radius';
import shadows from '../../../theme/shadows';
import spacing from '../../../theme/spacing';

export default StyleSheet.create({
  wrapper: {
    marginBottom: spacing.lg,
  },

  label: {
    marginBottom: spacing.sm,
    color: colors.textPrimary,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: colors.surface,

    borderWidth: 1,
    borderColor: colors.border,

    borderRadius: radius.lg,

    paddingHorizontal: spacing.md,

    minHeight: 56,

    ...shadows.card,
  },

  focused: {
    borderColor: colors.primary,
  },

  errorBorder: {
    borderColor: colors.chartRed,
  },

  disabled: {
    opacity: 0.6,
  },

  input: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 16,
    paddingVertical: spacing.md,
  },

  helperText: {
    marginTop: spacing.xs,
  },

  errorText: {
    marginTop: spacing.xs,
  },

  toggle: {
    color: colors.primary,
    fontWeight: '600',
  },
});