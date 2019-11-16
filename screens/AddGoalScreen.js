import React from 'react';
import { ScrollView, StyleSheet, TextInput, View, Button, TouchableOpacity, Text } from 'react-native';

let title = ""
let target = 0
let year = 0

updateTitle = (t) => {
    title = t
}

updateTarget = (t) => {
    console.log(t)
    target = parseInt(t)
}

updateYear = (t) => {
    year = parseInt(t)
}

export default function AddGoalScreen(props) {
    return (
        <ScrollView style={styles.container} style={{
            padding: 30
        }}>
            <Text style={{ fontSize: 16 }}>
                Title
            </Text>
            <TextInput
                style={{
                    height: 40,
                    backgroundColor: '#eee',
                    borderRadius: 5,
                    marginBottom: 10
                }}
                onChangeText={updateTitle}
            />
            <Text style={{ fontSize: 16 }}>
                Target
            </Text>
            <TextInput
                style={{
                    height: 40,
                    backgroundColor: '#eee',
                    borderRadius: 5,
                    marginBottom: 10
                }}
                onChangeText={updateTarget}
            />

            <Text style={{ fontSize: 16 }}>
                Year Target
            </Text>
            <TextInput
                style={{
                    height: 40,
                    backgroundColor: '#eee',
                    borderRadius: 5,
                    marginBottom: 10
                }}
                onChangeText={updateYear}
            />

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <Button title="Cancel" color="#ff0033" onPress={() => props.navigation.goBack()} />
                <Button title="Save" onPress={() => {
                    props.navigation.getParam('onSave')(title, target, year)
                    props.navigation.goBack()
                }} />
            </View>
        </ScrollView >
    );
}

AddGoalScreen.navigationOptions = {
    header: null
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
