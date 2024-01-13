import { StyleSheet, Button, View, Alert } from "react-native"


const ButtonComponent = () => {

    return (
        <View style={styles.container}>
            <Button
                title="Click Me"
                color={'#841584'}
                onPress={() => console.log('Pressed')}
            />

            <View style={{ height: 8 }} />

            <Button
                title="Click Me"
                color={'#158428'}
                onPress={() => Alert.alert('Button pressed')}
            />

        </View>
    )
}

export default ButtonComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    }
})