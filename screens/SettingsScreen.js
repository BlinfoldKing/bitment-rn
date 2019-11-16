import React from 'react';
import { View, Button } from 'react-native'
import { ExpoConfigView } from '@expo/samples';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <View>
      <ExpoConfigView />
      <Button style={{
        backgroundColor: '#ff0033',
        color: 'white'
      }}
        title="Logout"
      />
    </View>
  )
}

SettingsScreen.navigationOptions = {
  title: 'Profile',
  headerStyle: {
    borderBottomWidth: 3,
    borderBottomColor: `#ffbb00`
  },
};
