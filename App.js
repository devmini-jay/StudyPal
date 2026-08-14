import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AddUnitScreen from './screens/AddUnitScreen';
import UnitDetailsScreen from './screens/UnitDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
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
    options={{
      headerShown: false,
    }}
    children={(props) => (
      <HomeScreen
        {...props}
        units={units}
      />
    )}
  />

  <Stack.Screen
  name="AddUnit"
  children={(props) => (
    <AddUnitScreen
      {...props}
      setUnits={setUnits}
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
      />
    )}
  />
</Stack.Navigator>
    </NavigationContainer>
  );
}