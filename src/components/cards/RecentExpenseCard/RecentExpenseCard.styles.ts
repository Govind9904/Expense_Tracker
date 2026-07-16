import { StyleSheet } from 'react-native';

import Colors from '../../../theme/colors';
import Radius from '../../../theme/radius';
import Spacing from '../../../theme/spacing';


export default StyleSheet.create({

container:{

 flexDirection:'row',

 justifyContent:'space-between',

 alignItems:'center',

 backgroundColor:Colors.surface,

 borderRadius:Radius.md,

 padding:Spacing.md,

},

});