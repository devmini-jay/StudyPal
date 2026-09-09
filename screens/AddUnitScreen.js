import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/AddUnitStyles';

export default function AddUnitScreen({ navigation, setUnits, darkMode, API_URL, saveUnitsLocally}) {
  const [unitName, setUnitName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  return (
    <View style={[styles.container,darkMode && styles.darkContainer,]}>

      <Text style={[styles.title,darkMode && styles.darkText,]}>Create New Unit</Text>

      <Text style={[styles.label,darkMode && styles.darkText,]}>Unit Name</Text>
      <TextInput
        style={[styles.input,darkMode && styles.darkInput]} 
        placeholder="Enter unit name"
        value={unitName}
        onChangeText={setUnitName}
      />

      <Text style={[styles.label,darkMode && styles.darkText]}>Target Completion Date</Text>
      <TextInput
        style={[styles.input,darkMode && styles.darkInput]}
        placeholder="Enter target date"
        value={deadline}
        onChangeText={setDeadline}
      />

      <TouchableOpacity
        style={styles.createButton}
        disabled={saving} //so cant be pressed again while saving
        onPress={() => {
          // Prevent student creating empty unit
          if (unitName.trim() === '') {
            return;
          }
          setError(null); //before starting POST request, clear any old errors
          setSaving(true);

          const newUnit = {
            name: unitName,
            deadline: deadline,
            tasks: [],
          };

          fetch(API_URL, {
            method: 'POST', //creates a new resource in mockAPI
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUnit), //converts javascript object into JSON so can be sent to API
          })
          .then(response => {
            //to treat http erros (like 404) as javascript errors
            if (!response.ok) {
              throw new Error('Failed to create unit');
            }

            return response.json();
          })
          .then(createdUnit => {

            setUnits(currentUnits => {
              const updatedUnits = [
                ...currentUnits,
                createdUnit,
              ];

              saveUnitsLocally(updatedUnits);

              return updatedUnits;
            });

            setSaving(false);
            navigation.navigate('Home');
          })

          .catch(error => {
            setError(error.message);
            setSaving(false);
          });
      }}
      >

        {error && (
          <Text>
            {error}
          </Text>
        )}

        <Text style={styles.createButtonText}>
          {saving ? 'Creating Unit...' : 'Create Unit'}
        </Text>
      </TouchableOpacity>

    </View>
  );
}