import { StyleSheet } from 'react-native';

import spacing from '../../../theme/spacing';


export default StyleSheet.create({

  container:{
    flex:1,
    paddingHorizontal:spacing.lg,
    paddingVertical:spacing.xl,
  },


  header:{
    marginBottom:spacing.xxl,
  },


  subtitle:{
    marginTop:spacing.sm,
  },


  form:{
    marginBottom:spacing.xl,
  },


  footer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:spacing.lg,
  },

});