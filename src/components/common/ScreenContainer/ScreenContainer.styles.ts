import {StyleSheet} from 'react-native';
import Colors from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default styles;