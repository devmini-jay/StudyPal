import React from 'react';
import {
  View,
  Text,
  Switch,
} from 'react-native';

import styles from '../styles/SettingsScreenStyles';

export default function SettingsScreen({darkMode,setDarkMode,}) {

  return (
    <View
      style={[
        styles.container,
        darkMode && styles.darkContainer,
      ]}
    >
      <Text
        style={[
          styles.title,
          darkMode && styles.darkText,
        ]}
      >
        Settings
      </Text>

      <View style={[styles.settingRow,darkMode && styles.minidarkContainer,]}>
        <View>
          <Text
            style={[
              styles.settingTitle,darkMode && styles.darkText,
            ]}
          >
            {darkMode ? 'Dark Mode' : 'Light Mode'}
          </Text>

          <Text
            style={[
              styles.settingDescription,
              darkMode && styles.darkSecondaryText,
            ]}
          >
            Switch between light and dark mode
          </Text>
        </View>

        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
        />
      </View>

    </View>
  );
}