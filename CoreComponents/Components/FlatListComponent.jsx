import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native"


const DATA = [
    {
        id: '1',
        title: 'First Item',
        description: 'First Item Description',
    },
    {
        id: '2',
        title: 'Second Item',
        description: 'Second Item Description',
    },
    {
        id: '3',
        title: 'Third Item',
        description: 'Third Item Description',
    },
    {
        id: '4',
        title: 'Fourth Item',
        description: 'Fourth Item Description',
    },
    {
        id: '5',
        title: 'Fifth Item',
        description: 'Fifth Item Description',
    },
    {
        id: '6',
        title: 'Sixth Item',
        description: 'Sixth Item Description',
    },
    {
        id: '7',
        title: 'Seventh Item',
        description: 'Seventh Item Description',
    },
    {
        id: '8',
        title: 'Eighth Item',
        description: 'Eighth Item Description',
    },
    {
        id: '9',
        title: 'Ninth Item',
        description: 'Ninth Item Description',
    },
    {
        id: '10',
        title: 'Tenth Item',
        description: 'Tenth Item Description',
    },
    {
        id: '11',
        title: 'Eleventh Item',
        description: 'Eleventh Item Description',
    },
    {
        id: '12',
        title: 'Twelth Item',
        description: 'Twelth Item Description',
    },
    {
        id: '13',
        title: 'Thirteenth Item',
        description: 'Thirteenth Item Description',
    },
    {
        id: '14',
        title: 'Fourthteenth Item',
        description: 'Fourthteenth Item Description',
    },
    {
        id: '15',
        title: 'Fiftheenth Item',
        description: 'Fiftheenth Item Description',
    },
]
const FlatListComponent = () => {

    const [refreshing, setRefreshing] = useState(false);

    function onRefresh() {
        console.log('onRefresh');
        setRefreshing(true);
        setTimeout(() => {   
            setRefreshing(false);         
            console.log('onRefresh ... completed');
        }, 2000)
    }

    return (
        <FlatList
            style={{ marginTop: 100 }}
            data={DATA}
            renderItem={({ item, index, separators }) =>
                <View style={styles.card} >
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            }
            keyExtractor={item => item.id}
            refreshing={refreshing}
            onRefresh={onRefresh}
        />
    )

}

export default FlatListComponent;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#04d4aec4',
        padding: 16,
        borderRadius: 8,
        marginHorizontal: 8,
        marginVertical: 8,
        elevation: 4,
        shadowColor: "#ef0e0e",
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
    }

})