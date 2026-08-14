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
      name: 'Mobile App Development',
      progress: 0,
      completedTasks: 0,
      totalTasks: 0,
      deadline: '15 September 2026',
      tasks: [
        {
        id: 'p1',
        title: 'Sprint 1',
        subtasks: [
          { id: 'p1s1', title: 'Create structure', completed: false },
          { id: 'p1s2', title: 'Add navigation', completed: false },
          { id: 'p1s3', title: 'Add Theme toggle', completed: false },
          { id: 'p1s4', title: 'Add FlatList', completed: false },
        ],
      },
      {
        id: 'p2',
        title: 'Revision: Intro & Mobile Ecosystem',
        subtasks: [
          { id: 'p1s1', title: 'Types of Mobile Apps', completed: false },
          { id: 'p1s2', title: 'Mobile App types - pros and cons', completed: false },
          { id: 'p1s3', title: 'Mobile Dev challenges faced', completed: false },
        ],
      },
      {
        id: 'p3',
        title: 'Revision: React Native',
        subtasks: [
          { id: 'p1s1', title: 'Fundamentals: Components, Props, StyleSheet', completed: false },
          { id: 'p1s2', title: 'State management with useState & useEffect', completed: false },
          { id: 'p1s3', title: 'Navigation', completed: false },
          { id: 'p1s4', title: 'Lists, FlatLists, Search Functionality', completed: false },
        ],
      },
    ],
  },
  {
    id: '2',
      name: 'Cloud Computing & DevOps',
      progress: 0,
      completedTasks: 0,
      totalTasks: 0,
      deadline: '15 September 2026',
      tasks: [
        {
        id: 'p1',
        title: 'Revision: Intro to cloud computing',
        subtasks: [
          { id: 'p1s1', title: 'Read through lecture notes', completed: false },
        ],
      },
      {
        id: 'p2',
        title: 'AWS Practice',
        subtasks: [
          { id: 'p1s1', title: 'Create account', completed: false },
          { id: 'p1s2', title: 'Complete lab activity', completed: false },
          { id: 'p1s3', title: 'Terminate all resources properly', completed: false },
        ],
      },

      ],

  },
  {
    id: '3',
      name: 'AI & Machine Learning',
      progress: 0,
      completedTasks: 0,
      totalTasks: 0,
      deadline: '15 September 2026',
      tasks: [
        {
        id: 'p1',
        title: 'Revision: Intro to cAL & ML',
        subtasks: [
          { id: 'p1s1', title: 'Read through lecture notes', completed: false },
          { id: 'p1s2', title: 'Complete activity', completed: false },
        ],
      },
      {
        id: 'p2',
        title: 'Practice python prgramming',
        subtasks: [
          { id: 'p1s1', title: 'Practice fundamentals', completed: false },
          { id: 'p1s2', title: 'Finish Numpy Practical', completed: false },
          { id: 'p1s3', title: 'Finish Pandas Package activity', completed: false },
        ],
      },

      ],

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