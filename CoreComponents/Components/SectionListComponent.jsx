
import { useState } from "react";
import { SectionList, View, StyleSheet, Text, SafeAreaView } from "react-native"

const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];
  

const SectionListComponent = () => {

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
        <SafeAreaView style={styles.container}>
            <SectionList 
                sections={DATA}
                renderItem={({ item }) => 
                    (<View style={styles.card} >
                        <Text style={styles.item}>{item}</Text>                       
                    </View>)
                }
                ListEmptyComponent={() => <Text>Empty Data</Text>}
                renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
                renderSectionFooter={() => <Text>Footer</Text>}
                refreshing={refreshing}
                onRefresh={onRefresh}
                ListHeaderComponent={() => <Text>Food</Text>}
                ListFooterComponent={() => <Text>End of List</Text>}
            />
        </SafeAreaView>
    )
}

export default SectionListComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
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
        height: 100
    },
    item: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    header: {
        fontSize: 34,
        backgroundColor: '#229584',
        color: 'white',
    }
})