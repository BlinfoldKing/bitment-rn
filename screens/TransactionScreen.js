import React from 'react';
import { ScrollView, StyleSheet, TextInput, View, Button, TouchableOpacity, Text } from 'react-native';

export default function TransactionScreen(props) {
    return (
        <ScrollView style={styles.container} style={{
            padding: 30
        }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
                Pizza Hut
            </Text>
            <Text style={{ fontSize: 12 }}>
                Expense
            </Text>
            <Text style={{ fontSize: 18 }}>
                Double Box Jumbo x2
            </Text>
            <Text style={{ fontSize: 12, marginTop: 10 }}>
                Amount
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>
                Rp 100.000
            </Text>

            <View style={{
                flex: 0
            }}>
                <Button title="Pay Now" onPress={() => {
                    props.navigation.navigate('Reward')
                }} />
                <TouchableOpacity onPress={() => {
                    props.navigation.popToTop()
                }} >
                    <Text style={{
                        padding: 20,
                        color: '#ff0033',
                        textAlign: 'center'
                    }}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    );
}

TransactionScreen.navigationOptions = {
    header: null,

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
