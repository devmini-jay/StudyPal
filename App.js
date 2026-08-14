import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//navigations
import HomeScreen from './screens/HomeScreen';
import AddUnitScreen from './screens/AddUnitScreen';
import UnitDetailsScreen from './screens/UnitDetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [units, setUnits] = useState([
    {
      id: '1',
      name: 'Programming',
      progress: 0,
      completedTasks: 0,
      totalTasks: 0,
      deadline: 'September 15, 2026',
      tasks: [],
    },
  ]);

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