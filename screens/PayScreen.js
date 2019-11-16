
import React from 'react';
import { ScrollView, StyleSheet, TextInput, View, Button, TouchableOpacity, Text } from 'react-native';

export default function PayScreen(props) {
    return (
        <ScrollView style={styles.container} style={{
            padding: 30
        }}>
            <Text style={{ fontSize: 16 }}>
                Enter Transaction Code
            </Text>
            <TextInput
                style={{
                    height: 40,
                    backgroundColor: '#eee',
                    borderRadius: 5,
                    marginBottom: 10,
                    textAlign: 'center'
                }}
                onChangeText={updateTitle}
                maxLength={6}
            />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <Button title="Check" onPress={() => {
                    props.navigation.navigate('Transaction')
                }} />
            </View>
        </ScrollView >
    );
}

PayScreen.navigationOptions = {
    title: 'Pay',
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
