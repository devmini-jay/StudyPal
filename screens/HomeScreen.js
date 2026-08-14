import React from 'react';
import { View, Text, FlatList, TouchableOpacity, } from 'react-native';
import styles from '../styles/HomeScreenStyles';

export default function HomeScreen({ navigation, units}) {

  const today = new Date();

const formattedDate = today.toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'long',
  weekday: 'long',
});

  const calculateTotal = unit => {
  return unit.tasks.reduce(
    (total, task) => total + task.subtasks.length,
    0
  );
};

const calculateCompleted = unit => {
  return unit.tasks.reduce(
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
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>StudyPal</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>

      <Text style={styles.sectionTitle}>My Units</Text>
      <FlatList 
      data={units} 
      keyExtractor={(item) => item.id} 
      renderItem={({ item }) => (
            <TouchableOpacity style={styles.unitCard} 
              onPress={() =>
                navigation.navigate('UnitDetails', {
                  unit: item,
                })
              }
            >
                <Text style={styles.unitName}>{item.name}</Text>
                <Text style={styles.unitProgress}>{calculateProgress(item)}% completed</Text>
                <Text style={styles.taskCount}>{calculateCompleted(item)} / {calculateTotal(item)} tasks completed</Text>
                <View style={styles.progressBar}>
                    <View style={[ styles.progressFill,{ width: `${calculateProgress(item)}%` },]}/>
                </View>
                <Text style={styles.unitDeadline}>Target date: {item.deadline}</Text>
            
            </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />

      <TouchableOpacity style={styles.addUnitButton} onPress={() => navigation.navigate('AddUnit')}>
        <Text style={styles.addUnitButtonText}>+ Add Unit</Text>
      </TouchableOpacity>

      
    </View>
  );
}