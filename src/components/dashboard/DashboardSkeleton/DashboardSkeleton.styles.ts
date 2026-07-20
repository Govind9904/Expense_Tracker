import {StyleSheet} from 'react-native';

import spacing from '../../../theme/spacing';
import radius from '../../../theme/radius';

const styles = StyleSheet.create({

  container:{
    padding: spacing.md,
  },


  header:{
    marginBottom: spacing.lg,
  },


  balanceCard:{
    padding: spacing.lg,
    borderRadius: radius.lg,
    marginBottom: spacing.md,
  },


  balanceAmount:{
    marginTop: spacing.md,
  },


  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    gap: spacing.md,
    marginBottom: spacing.md,
  },


  smallCard:{
    flex:1,
    padding: spacing.md,
    borderRadius: radius.md,
  },


  cardValue:{
    marginTop: spacing.sm,
  },


  chartCard:{
    marginBottom: spacing.md,
  },


  recentCard:{},

  listItem:{
    marginTop: spacing.sm,
  },

});

export default styles;