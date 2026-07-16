import {StyleSheet} from 'react-native';
import Colors from '../../../theme/colors';

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 16,

    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 20,
  },

  fullWidth: {
    width: '100%',
  },

  primary: {
    backgroundColor: Colors.primary,
  },

  secondary: {
    backgroundColor: Colors.secondary,
  },

  outline: {
    backgroundColor: Colors.white,
    borderWidth: 1.5,
    borderColor: Colors.primary,
  },

  disabled: {
    opacity: 0.6,
  },
});

export default styles;