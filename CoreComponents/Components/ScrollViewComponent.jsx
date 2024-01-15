import { ScrollView, StyleSheet, View } from "react-native";
import BoxComponent from "./Box/BoxComponent";


const ScrollViewComponent = () => {
    return (
        // vertical scroll
        // <ScrollView style={styles.container}>
        //     <BoxComponent />
        //     <View style={{ height: 8 }} />
        //     <BoxComponent />
        //     <View style={{ height: 8 }} />
        //     <BoxComponent />
        //     <View style={{ height: 8 }} />
        //     <BoxComponent />
        //     <View style={{ height: 8 }} />
        //     <BoxComponent />
        //     <View style={{ height: 8 }} />
        //     <BoxComponent />
        //     <View style={{ height: 8 }} />
        //     <BoxComponent />
        //     <View style={{ height: 8 }} />
        //     <BoxComponent />
        //     <View style={{ height: 8 }} />
        //     <BoxComponent />
        //     <View style={{ height: 8 }} />
        //     <BoxComponent />
        //     <View style={{ height: 8 }} />
        //     <BoxComponent />
        //     <View style={{ height: 8 }} />
        //     <BoxComponent />
        //     <View style={{ height: 8 }} />
        //     <BoxComponent />
        //     <View style={{ height: 8 }} />
        //     <BoxComponent />
        //     <View style={{ height: 8 }} />
        //     <BoxComponent />
        //     <View style={{ height: 8 }} />

        // </ScrollView>

        // horizental scroll

        <ScrollView
            style={styles.container}
            horizontal={true}
            onScroll={(event) => console.log(event.nativeEvent.contentOffset.x)}
        >
            <BoxComponent />
            <View style={{ width: 8 }} />
            <BoxComponent />
            <View style={{ width: 8 }} />
            <BoxComponent />
            <View style={{ width: 8 }} />
            <BoxComponent />
            <View style={{ width: 8 }} />
            <BoxComponent />
            <View style={{ width: 8 }} />
            <BoxComponent />
            <View style={{ width: 8 }} />
            <BoxComponent />
            <View style={{ width: 8 }} />
            <BoxComponent />
            <View style={{ width: 8 }} />
            <BoxComponent />
            <View style={{ width: 8 }} />
            <BoxComponent />
            <View style={{ width: 8 }} />
            <BoxComponent />
            <View style={{ width: 8 }} />
            <BoxComponent />
            <View style={{ width: 8 }} />
            <BoxComponent />
            <View style={{ width: 8 }} />
            <BoxComponent />
            <View style={{ width: 8 }} />
            <BoxComponent />
            <View style={{ width: 8 }} />

        </ScrollView>
    )

}

export default ScrollViewComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})