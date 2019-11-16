import React from 'react';
import { View, Text, ProgressBarAndroid, Button } from 'react-native';

export function HistoryCard(props) {
    console.log(props)
    return (
        <View style={{
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 20,
            marginTop: 10
        }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 18
            }}>
                Kuliah di standford
            </Text>
            <View style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <View>
                    <Text style={{
                        color: 'rgba(33, 46, 64, 0.6)',
                        fontSize: 10
                    }}>
                        Transaction Amount
                    </Text>
                    <Text style={{
                        fontSize: 12
                    }}>
                        Rp. 300.676
                    </Text>
                </View>
                <View>
                    <Text style={{
                        color: 'rgba(33, 46, 64, 0.6)',
                        fontSize: 10
                    }}>
                        Cashback
                    </Text>
                    <Text style={{
                        fontSize: 12
                    }}>
                        Rp. 35.000
                    </Text>
                </View>
            </View>
        </View>
    );
}

