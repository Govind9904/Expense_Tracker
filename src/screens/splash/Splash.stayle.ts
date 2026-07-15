import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F46E5',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 70,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 140,
    height: 140,
    marginBottom: 30,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  subtitle: {
    marginTop: 10,
    color: 'rgba(255,255,255,0.8)',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.3,
  },

  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;