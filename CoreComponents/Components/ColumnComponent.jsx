import { View, StyleSheet, Text } from "react-native"
const ColumnComponet = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>2</Text>
            <Text style={styles.text}>3</Text>
            <Text style={styles.text}>4</Text>
            <Text style={styles.text}>5</Text>
            <Text style={styles.text}>6</Text>
            <Text style={styles.text}>7</Text>
        </View>
    )
}

export default ColumnComponet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ebf4f6df',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})