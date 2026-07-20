import { StyleSheet } from 'react-native';

import Colors from '../../../theme/colors';
import Spacing from '../../../theme/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: Spacing.xl,
  },

  iconContainer: {
    marginBottom: Spacing.lg,
  },

  title: {
    marginBottom: Spacing.sm,
  },

  description: {
    marginBottom: Spacing.xl,

    color: Colors.textSecondary,
  },
});
