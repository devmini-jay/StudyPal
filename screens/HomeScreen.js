import React from 'react';
import { View, Text, FlatList, TouchableOpacity, } from 'react-native';
import styles from '../styles/HomeScreenStyles';

export default function HomeScreen({ navigation, units, darkMode, loading, error, offlineMode,}) {

  const today = new Date();

const formattedDate = today.toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'long',
  weekday: 'long',
});

const calculateTotal = unit => {
  const tasks = unit.tasks || []; //if unit has tasks use them, other wise use an epty array

  return tasks.reduce(
    (total, task) => total + task.subtasks.length,
    0
  );
};

const calculateCompleted = unit => {
  const tasks = unit.tasks || [];

  return tasks.reduce(
    (total, task) =>
      total +
      task.subtasks.filter(
        subtask => subtask.completed
      ).length,
    0
  );
};

const calculateProgress = unit => {
  const total = calculateTotal(unit);

  if (total === 0) {
    return 0;
  }

  return Math.round(
    (calculateCompleted(unit) / total) * 100
  );
};

  return (
    <View style={[styles.container,darkMode && styles.darkContainer,]}>

      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={[styles.title,darkMode && styles.darkText,]}>StudyPal</Text>
          <TouchableOpacity style={styles.settingsIcon} onPress={() => navigation.navigate('Settings')}>
            <Text style={[styles.settingsIconText, darkMode && styles.darkText,]}>⚙</Text>
          </TouchableOpacity>
        </View>

  <Text style={[styles.date,darkMode && styles.darkText,]}>
    {formattedDate}
  </Text>

</View>

      <Text style={[styles.sectionTitle,darkMode && styles.darkText,]}>My Units</Text>

      {offlineMode && (
        <Text style={darkMode && styles.darkText}>
          Offline mode - showing saved data
        </Text>
      )}
      
      {loading ? (

        <Text style={darkMode && styles.darkText}>
          Loading units...
        </Text>

      ) : error ? (

        <Text style={darkMode && styles.darkText}>
          {error}
        </Text>

      ) : units.length === 0 ? (

        <Text style={darkMode && styles.darkText}>
          No units available. Add your first unit.
        </Text>

      ) : (

      <FlatList 
      data={units} 
      keyExtractor={(item) => item.id} 
      renderItem={({ item }) => (
            <TouchableOpacity style={[styles.unitCard,darkMode && styles.darkCard,]} 
              onPress={() =>
                navigation.navigate('UnitDetails', {
                  unit: item,
                })
              }
            >
                <Text style={[styles.unitName,darkMode && styles.darkText,]}>{item.name}</Text>
                <Text style={[styles.unitProgress,darkMode && styles.darkText,]}>{calculateProgress(item)}% completed</Text>
                <Text style={[styles.taskCount,darkMode && styles.darkSecondaryText,]}>{calculateCompleted(item)} / {calculateTotal(item)} tasks completed</Text>
                <View style={styles.progressBar}>
                    <View style={[ styles.progressFill,{ width: `${calculateProgress(item)}%` },]}/>
                </View>
                <Text style={[styles.unitDeadline,darkMode && styles.darkSecondaryText,]}>Target date: {item.deadline}</Text>
            
            </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />
      )}

    

      <TouchableOpacity style={styles.addUnitButton} onPress={() => navigation.navigate('AddUnit')}>
        <Text style={[styles.addUnitButtonText,darkMode && styles.darkText,]}>+ Add Unit</Text>
      </TouchableOpacity>

      
    </View>
  );
}