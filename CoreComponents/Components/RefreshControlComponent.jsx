import { StyleSheet, Text, View, RefreshControl, ScrollView, SafeAreaView } from 'react-native';
import BoxComponent from "./Box/BoxComponent";
import { useState } from 'react';
const RefreshControlComponent = () => {

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
        <SafeAreaView>

            <ScrollView style={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh} />
                }
            >
                <BoxComponent />
                <View style={{ height: 8 }} />
                <BoxComponent />
                <View style={{ height: 8 }} />
                <BoxComponent />
                <View style={{ height: 8 }} />
                <BoxComponent />
                <View style={{ height: 8 }} />
                <BoxComponent />
                <View style={{ height: 8 }} />
                <BoxComponent />
                <View style={{ height: 8 }} />
                <BoxComponent />
                <View style={{ height: 8 }} />
                <BoxComponent />
                <View style={{ height: 8 }} />
                <BoxComponent />
                <View style={{ height: 8 }} />
                <BoxComponent />
                <View style={{ height: 8 }} />
                <BoxComponent />
                <View style={{ height: 8 }} />
                <BoxComponent />
                <View style={{ height: 8 }} />
                <BoxComponent />
                <View style={{ height: 8 }} />
                <BoxComponent />
                <View style={{ height: 8 }} />
                <BoxComponent />
                <View style={{ height: 8 }} />

            </ScrollView>
        </SafeAreaView>
    );
}

export default RefreshControlComponent;

const styles = StyleSheet.create({

});