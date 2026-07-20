import { StyleSheet } from 'react-native';

import Colors from '../../../theme/colors';
import Radius from '../../../theme/radius';
import Spacing from '../../../theme/spacing';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: Spacing.xl,
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },

  avatarPlaceholder: {
    width: 52,
    height: 52,
    borderRadius: 26,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: Colors.primary,
  },

  userInfo: {
    marginLeft: Spacing.md,
  },
});
