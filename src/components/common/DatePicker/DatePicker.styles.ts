import { StyleSheet } from 'react-native';

import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import radius from '../../../theme/radius';
import typography from '../../../theme/typography';

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },

  label: {
    marginBottom: spacing.sm,
    color: colors.textSecondary,
  },

  input: {
    height: 52,

    borderWidth: 1,
    borderColor: colors.border,

    borderRadius: radius.md,

    paddingHorizontal: spacing.md,

    justifyContent: 'center',

    backgroundColor: colors.surface,
  },

  text: {
    color: colors.textPrimary,
  },

  placeholder: {
    color: colors.textSecondary,
  },

  errorBorder: {
    borderColor: colors.buttonDanger,
  },

  errorText: {
    marginTop: spacing.xs,
    color: colors.buttonDanger,
  },

  disabled: {
    opacity: 0.6,
  },
});

export default styles;
