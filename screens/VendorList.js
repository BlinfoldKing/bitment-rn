import React from 'react';
import { ScrollView, StyleSheet, FlatList } from 'react-native';
import { VendorCard } from '../components/VendorCard'
import { ExpoLinksView } from '@expo/samples';

let dummy = [
    {
        id: 0,
        title: 'Hardyanto Venture Ltd.',
        subtitle: 'Venture Capitalist Attached Bandung',
        minimum: 30000,
        performance: '5.67%',
        total: '300000000'
    }
]

export default function VendorList(props) {
    console.log(props)
    return (
        <ScrollView style={styles.container}>
            <FlatList
                data={dummy}
                renderItem={({ item }) => {
                    console.log(item)
                    return < VendorCard
                        data={item}
                        navigation={props.navigation}
                    />
                }}
                keyExtractor={(item) => `${item.id}`}
            />
        </ScrollView>
    );
}

VendorList.navigationOptions = {
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
