import { StyleSheet } from 'react-native';

import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import radius from '../../../theme/radius';

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },

  label: {
    marginBottom: spacing.sm,
    color: colors.textSecondary,
  },

  dropdown: {
    height: 52,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.surface,
  },

  placeholder: {
    color: colors.textSecondary,
  },

  selectedText: {
    color: colors.textPrimary,
  },

  itemText: {
    color: colors.textPrimary,
  },

  errorBorder: {
    borderColor: colors.buttonDanger,
  },

  errorText: {
    color: colors.buttonDanger,
    marginTop: spacing.xs,
  },
});

export default styles;
