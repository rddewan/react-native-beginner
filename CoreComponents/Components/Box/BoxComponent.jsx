import { StyleSheet, View } from "react-native"

const BoxComponent = () => {

    return (
        <View style={styles.container} />
    );
}

export default BoxComponent;

const styles = StyleSheet.create({
    // container: {
    //     height: 100,
    //     width: "100%",
    //     backgroundColor: 'red',
    // }
    container: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
    }
    
})