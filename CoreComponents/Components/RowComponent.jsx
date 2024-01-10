import { View, Text, StyleSheet } from 'react-native';

const RowComponent = () => {
    return (
        <View style={styles.rootContainer}>

            <View style={styles.container}>
                <Text style={styles.text}>1</Text>
                <View style={{ height: 8 }} />
                <Text style={styles.text}>2</Text>
                <View style={{ height: 8 }} />
                <Text style={styles.text}>3</Text>
                <View style={{ height: 8 }} />
                <Text style={styles.text}>4</Text>
                <View style={{ height: 8 }} />
                <Text style={styles.text}>5</Text>
                <View style={{ height: 8 }} />
                <Text style={styles.text}>6</Text>
                <View style={{ height: 8 }} />
                <Text style={styles.text}>7</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>1</Text>
                <View style={{ height: 8 }} />
                <Text style={styles.text}>2</Text>
                <View style={{ height: 8 }} />
                <Text style={styles.text}>3</Text>
                <View style={{ height: 8 }} />
                <Text style={styles.text}>4</Text>
                <View style={{ height: 8 }} />
                <Text style={styles.text}>5</Text>
                <View style={{ height: 8 }} />
                <Text style={styles.text}>6</Text>
                <View style={{ height: 8 }} />
                <Text style={styles.text}>7</Text>
            </View>
        </View>
    )
}

export default RowComponent;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,       
    },
    container: {   
          
        flexDirection: 'row',
        marginTop: 40,
        backgroundColor: '#ebf4f6df',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})