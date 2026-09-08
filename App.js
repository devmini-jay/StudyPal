import React, { useState, useEffect, use } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

//navigations
import HomeScreen from './screens/HomeScreen';
import AddUnitScreen from './screens/AddUnitScreen';
import UnitDetailsScreen from './screens/UnitDetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  //MockAPI endpoint
  const API_URL = 'https://6aa0561c3e0d88d3d7e592b6.mockapi.io/api/v1/units';

  const [darkMode, setDarkMode] = useState(false);
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //function to save units
  const saveUnitsLocally = async (unitData) => {
    try {
      await AsyncStorage.setItem(
        'units',
        JSON.stringify(unitData)
      );
    } catch (error) {
      console.log('Failed to save units locally');
    }
  };

  //function to retrive saved units when GET request fails
  const loadUnitsLocally = async () => {
    try {
      const savedUnits = await AsyncStorage.getItem('units');

      if (savedUnits !== null) {
        setUnits(JSON.parse(savedUnits));
        return true;
      }

      return false;

    } catch (error) {
      console.log('Failed to load units locally');
      return false;
    }
  };

  useEffect(() => {
    //send a GET request to MockAPI
    fetch(API_URL)

    //response is HTTP response. Then convert JSON response into JavaScript data
      .then(response => {
        //check whether server request actually succeeded.
        if (!response.ok) {
          throw new Error('Failed to load units');
        }

      return response.json();
    })

      //take that data (array of objects) and store in the existing units state.
      .then(data => {
        setUnits(data);
        saveUnitsLocally(data);
        setLoading(false);
      })
      //if GET request fails
      .catch(async error => {

        const hasLocalData = await loadUnitsLocally();

        if (!hasLocalData) {
          setError(error.message);
        }

        setLoading(false);
      });

  }, []);


//navigation
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          children={(props) => (
            <HomeScreen
              {...props}
              units={units}
              darkMode={darkMode}
              loading={loading}
              error={error}
            />
        )}
        />

        <Stack.Screen
          name="AddUnit"
          children={(props) => (
            <AddUnitScreen
              {...props}
              setUnits={setUnits}
              darkMode={darkMode}
              API_URL={API_URL}
            />
          )}
        />

        <Stack.Screen
          name="UnitDetails"
          options={{
            title: 'Unit Details',
          }}
          children={(props) => (
            <UnitDetailsScreen
              {...props}
              units={units}
              setUnits={setUnits}
              darkMode={darkMode}
              API_URL={API_URL}
            />
          )}
        />

        <Stack.Screen
        name="Settings"
        children={(props) => (
          <SettingsScreen
            {...props}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        )}
        options={{
          title: 'Settings',
        }}
      />


</Stack.Navigator>
    </NavigationContainer>
  );
}