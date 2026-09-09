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
  borderRadius: 16,
  padding: 18,
  marginBottom: 14,

  borderWidth: 1,
  borderColor: '#E8EAF0',

  elevation: 2,

  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.06,
  shadowRadius: 5,
},

  unitName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 8,
  },

  unitProgress: {
  fontSize: 15,
  fontWeight: '600',
  color: '#4F46E5',
  marginBottom: 5,
},

  taskCount: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 10,
  },

  progressBar: {
  height: 9,
  backgroundColor: '#E8EAF0',
  borderRadius: 10,
  overflow: 'hidden',
  marginTop: 4,
  marginBottom: 12,
},

offlineBanner: {
  backgroundColor: '#FFF7ED',
  borderRadius: 10,
  padding: 12,
  marginBottom: 15,
},

offlineText: {
  color: '#9A3412',
  fontSize: 13,
  fontWeight: '600',
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