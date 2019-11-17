import React from 'react';
import { View, Text, ProgressBarAndroid, Button, TouchableOpacity } from 'react-native';

export function VendorCard(props) {
    console.log(props)
    return (
        <TouchableOpacity style={{
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 20,
            marginTop: 10,
        }}
            onPress={() => {
                props.navigation.popToTop()
            }}
        >
            <Text style={{
                fontWeight: 'bold',
                fontSize: 18
            }}>
                PT Hardyanto Venture
            </Text>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 16,
                color: 'rgba(33, 46, 64, 0.6)',
            }}>
                Venture Capitalist at bandung
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
                        Minimum Purchase
                    </Text>
                    <Text style={{
                        fontSize: 12
                    }}>
                        Rp 30.000
                    </Text>
                </View>
                <View>
                    <Text style={{
                        color: 'rgba(33, 46, 64, 0.6)',
                        fontSize: 10
                    }}>
                        Performance
                    </Text>
                    <Text style={{
                        fontSize: 12
                    }}>
                        5.67%
                    </Text>
                </View>
                <View>
                    <Text style={{
                        color: 'rgba(33, 46, 64, 0.6)',
                        fontSize: 10
                    }}>
                        Total Funds
                    </Text>
                    <Text style={{
                        fontSize: 12
                    }}>
                        Rp. 300.000.000
                    </Text>
                </View>

            </View>

        </TouchableOpacity>
    );
}

