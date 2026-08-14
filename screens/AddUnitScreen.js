import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/AddUnitStyles';

export default function AddUnitScreen({ navigation, setUnits }) {
  const [unitName, setUnitName] = useState('');
  const [unitCode, setUnitCode] = useState('');
  const [deadline, setDeadline] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Create New Unit</Text>

      <Text style={styles.label}>Unit Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter unit name"
        value={unitName}
        onChangeText={setUnitName}
      />

      <Text style={styles.label}>Unit Code</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter unit code"
        value={unitCode}
        onChangeText={setUnitCode}
      />

      <Text style={styles.label}>Target Completion Date</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter target date"
        value={deadline}
        onChangeText={setDeadline}
      />

      <TouchableOpacity
        style={styles.createButton}
        onPress={() => {
          // Prevent student creating empty unit
          if (unitName.trim() === '') {
            return;
          }

          const newUnit = {
            id: Date.now().toString(),
            name: unitName,
            code: unitCode,
            progress: 0,
            completedTasks: 0,
            totalTasks: 0,
            deadline: deadline,
            tasks: [],
          };

          setUnits(currentUnits => [
            ...currentUnits,
            newUnit,
          ]);

          navigation.navigate('Home');
        }}
      >
        <Text style={styles.createButtonText}>
          Create Unit
        </Text>
      </TouchableOpacity>

    </View>
  );
}