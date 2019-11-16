import React from 'react';
import { ScrollView, StyleSheet, FlatList } from 'react-native';
import { GoalCard } from '../components/GoalCard'
import { ExpoLinksView } from '@expo/samples';

let dummy = [
    {
        id: 0,
        title: 'Kuliah Di standford',
        current: 10000,
        target: 20000,
        year: 2025
    }
]

export default function GoalsList() {
    return (
        <ScrollView style={styles.container}>
            <FlatList
                data={dummy}
                renderItem={({ item }) => {
                    console.log(item)
                    return < GoalCard data={item} />
                }}
                keyExtractor={(item) => `${item.id}`}
            />
        </ScrollView>
    );
}

GoalsList.navigationOptions = {
    title: 'Pick a goal',
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
