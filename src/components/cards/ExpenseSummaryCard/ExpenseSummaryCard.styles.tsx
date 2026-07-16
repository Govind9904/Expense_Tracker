import { StyleSheet } from 'react-native';

import Colors from '../../../theme/colors';
import Radius from '../../../theme/radius';
import Spacing from '../../../theme/spacing';


export default StyleSheet.create({

container:{

  flex:1,

  backgroundColor:Colors.surface,

  borderRadius:Radius.md,

  padding:Spacing.md,

},

amount:{

  marginTop:Spacing.sm,

},

});