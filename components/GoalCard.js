import React from 'react';
import { View, Text, ProgressBarAndroid, Button } from 'react-native';

export function GoalCard(props) {
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
                {props.data && props.data.title}
            </Text>
            <Text style={{
                color: 'rgba(33, 46, 64, 0.6)',
                fontSize: 12
            }}>
                Rp. {props.data && props.data.current}/Rp.{props.data && props.data.target}
            </Text>
            <ProgressBarAndroid
                styleAttr="Horizontal"
                color="#7DBE46"
                indeterminate={false}
                progress={props.data ? props.data.current / props.data.target : 0}
            />
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
                        Monthly Recommendation
                    </Text>
                    <Text style={{
                        fontSize: 12
                    }}>
                        Rp. 300.676/month
                    </Text>
                </View>
                <Button
                    title="Deposit"
                    onPress={() => {
                        props.navigation.navigate('Vendor')
                    }}
                />
            </View>
        </View>
    );
}

