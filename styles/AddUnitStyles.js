import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 25,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D5D8DE',
    borderRadius: 10,
    padding: 13,
    fontSize: 15,
    marginBottom: 20,
  },

  createButton: {
    backgroundColor: '#4F46E5',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  createButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  
  darkContainer: {
  backgroundColor: '#18181B',
},

darkText: {
  color: '#FFFFFF',
},

darkInput: {
  backgroundColor: '#27272A',
  borderColor: '#444444',
  color: '#FFFFFF',
},


});

export default styles;