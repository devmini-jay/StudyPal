import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    padding: 20,
  },

  darkContainer: {
    backgroundColor: '#18181B',
  },

  minidarkContainer: {
    backgroundColor: '#3b3b3f',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 30,
  },

  darkText: {
    color: '#FFFFFF',
  },

  darkSecondaryText: {
    color: '#AAAAAA',
  },

  settingRow: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  settingTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222222',
  },

  settingDescription: {
    fontSize: 13,
    color: '#666666',
    marginTop: 4,
  },

  themeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222222',
    marginTop: 25,
  },
});

export default styles;