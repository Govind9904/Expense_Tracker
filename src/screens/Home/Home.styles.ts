import { StyleSheet } from 'react-native';

import Spacing from '../../theme/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
    gap: Spacing.lg,
  },

  header: {
    marginBottom: Spacing.sm,
  },

  summaryRow: {
    flexDirection: 'row',
    gap: Spacing.md,
  },

  sectionTitle: {
    marginTop: Spacing.md,
  },
});