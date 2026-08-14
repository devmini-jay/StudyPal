import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    paddingHorizontal: 20,
  },

  header: {
    paddingTop: 50,
    paddingBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#222222',
  },

  date: {
    fontSize: 15,
    color: '#666666',
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 12,
  },

  listContent: {
    paddingBottom: 100,
  },

  unitCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 18,
    marginBottom: 15,
    elevation: 3,
  },

  unitName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 8,
  },

  unitProgress: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },

  taskCount: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 10,
  },

  progressBar: {
    height: 8,
    backgroundColor: '#E2E5EA',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 12,
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#4F46E5',
    borderRadius: 10,
  },

  unitDeadline: {
    fontSize: 13,
    color: '#666666',
  },

  addUnitButton: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: '#4F46E5',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 4,
  },

  addUnitButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  headerTop: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},

settingsIcon: {
  width: 42,
  height: 42,
  borderRadius: 21,
  backgroundColor: '#E8E8F8',
  alignItems: 'center',
  justifyContent: 'center',
},

settingsIconText: {
  fontSize: 22,
  color: '#4F46E5',
},

darkContainer: {
  backgroundColor: '#18181B',
},

darkText: {
  color: '#FFFFFF',
},

darkCard: {
  backgroundColor: '#27272A',
},

darkSecondaryText: {
  color: '#AAAAAA',
},

});

export default styles;