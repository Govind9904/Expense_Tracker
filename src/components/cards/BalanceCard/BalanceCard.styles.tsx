import { StyleSheet } from 'react-native';

import Colors from '../../../theme/colors';
import Radius from '../../../theme/radius';
import Spacing from '../../../theme/spacing';


export default StyleSheet.create({

  container: {

    backgroundColor: Colors.primary,

    borderRadius: Radius.lg,

    padding: Spacing.lg,

  },


  amount: {

    marginTop: Spacing.sm,

  },

});