import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { HistoryCard } from '../components/HistoryCard'
import { ExpoLinksView } from '@expo/samples';

export default function HistoryScreen() {
  return (
    <ScrollView style={styles.container}>
      <HistoryCard />

    </ScrollView>
  );
}

HistoryScreen.navigationOptions = {
  title: 'History',
  headerStyle: {
    borderBottomWidth: 3,
    borderBottomColor: `#ffbb00`
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    backgroundColor: '#EFF3F8',
    padding: 10
  },
});
