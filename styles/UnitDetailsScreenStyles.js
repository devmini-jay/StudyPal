import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  unitName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 8,
  },

  progress: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4F46E5',
    marginBottom: 5,
  },

  taskCount: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },

  deadline: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 12,
  },

  taskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },

  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 10,
  },

  subtaskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
  },

  checkbox: {
    fontSize: 20,
    marginRight: 10,
  },

  subtaskText: {
    fontSize: 15,
    color: '#444444',
    flex: 1,
  },

  completedSubtask: {
    textDecorationLine: 'line-through',
    color: '#999999',
  },

  addSubtaskText: {
    color: '#4F46E5',
    marginTop: 10,
    fontWeight: 'bold',
  },

  addTaskContainer: {
    marginTop: 10,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D5D8DE',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    fontSize: 15,
  },

  saveButton: {
    backgroundColor: '#4F46E5',
    padding: 13,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 50,
  },

  addButton: {
    backgroundColor: '#4F46E5',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 50,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  
  darkContainer: {
  backgroundColor: '#18181B',
},

darkCard: {
  backgroundColor: '#27272A',
},

darkText: {
  color: '#FFFFFF',
},

darkSecondaryText: {
  color: '#AAAAAA',
},

});

export default styles;