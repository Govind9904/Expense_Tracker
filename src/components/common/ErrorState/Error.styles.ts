import { StyleSheet } from 'react-native';

import Spacing from '../../../theme/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    paddingHorizontal: Spacing.lg,
  },

  message: {
    marginVertical: Spacing.md,
  },
});
