import { StyleSheet, Text, View, Pressable } from 'react-native'
const PressableComponent = () => {
    function onPress() {
        console.log("Button Pressed");
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.button}
                onPress={onPress}
                onLongPress={() => console.log("Long Pressed")}
                onPressIn={() => console.log("In")}
                onPressOut={() => console.log("Out")}
            >
                <Text>Pressable Component</Text>
            </Pressable>
        </View>
    )

}
export default PressableComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0bdfa3',
        padding: 10,
        width: 200,
        height: 50,
        borderRadius: 8
    }
})