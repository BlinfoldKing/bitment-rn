import React from 'react';
import { ScrollView, StyleSheet, Image, View, Button, TouchableOpacity, Text } from 'react-native';

export default function RewardScreen(props) {
    return (
        <ScrollView style={styles.container} style={{
            padding: 50
        }}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                    source={require('../assets/images/saving_2.png')}
                />
            </View>
            <View style={{
                margin: 10
            }}>
                <Text style={{ textAlign: 'center', color: '#555' }}>
                    Congratulations you got an investment credit
                </Text>
                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
                    Rp 30.000
                </Text>
            </View>
            <View style={{
                flex: 0
            }}>
                <Button title="Invest Now" onPress={() => {
                    props.navigation.navigate('GoalList')
                }} />
                <TouchableOpacity onPress={() => {
                    props.navigation.popToTop()
                }} >
                    <Text style={{
                        padding: 20,
                        color: '#aaa',
                        textAlign: 'center'
                    }}>
                        Save for later
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    );
}

RewardScreen.navigationOptions = {
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
