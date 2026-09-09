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
  fontSize: 20,
  fontWeight: 'bold',
  color: '#222222',
  marginBottom: 14,
},

  taskCard: {
  backgroundColor: '#FFFFFF',
  borderRadius: 14,
  padding: 16,
  marginBottom: 12,

  borderWidth: 1,
  borderColor: '#E8EAF0',

  elevation: 2,
},

  taskTitle: {
  fontSize: 17,
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

  editButton: {
  backgroundColor: '#EEF2FF',
  paddingVertical: 10,
  paddingHorizontal: 14,
  borderRadius: 10,

  alignSelf: 'flex-start',
  marginBottom: 20,
},

editButtonText: {
  color: '#4F46E5',
  fontSize: 14,
  fontWeight: '600',
},

deleteButton: {
  backgroundColor: '#FEF2F2',
  borderWidth: 1,
  borderColor: '#FCA5A5',

  paddingVertical: 13,
  borderRadius: 10,
  alignItems: 'center',

  marginTop: 10,
  marginBottom: 65,
},

deleteButtonText: {
  color: '#DC2626',
  fontSize: 15,
  fontWeight: '600',
},

  addTaskContainer: {
    marginTop: 10,
  },

 input: {
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: '#D5D8DE',
  borderRadius: 10,

  paddingHorizontal: 12,
  paddingVertical: 12,

  fontSize: 15,
  color: '#222222',

  marginBottom: 12,
},

saveButton: {
  backgroundColor: '#4F46E5',
  paddingVertical: 13,
  borderRadius: 10,
  alignItems: 'center',
  marginBottom: 15,
},

darkInput: {
  backgroundColor: '#27272A',
  borderColor: '#444444',
  color: '#FFFFFF',
},

errorText: {
  color: '#DC2626',
  fontSize: 13,
  marginBottom: 12,
},

addButton: {
  backgroundColor: '#4F46E5',
  paddingVertical: 13,
  borderRadius: 10,
  alignItems: 'center',
  marginBottom: 15,
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