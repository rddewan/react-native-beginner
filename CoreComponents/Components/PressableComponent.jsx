
import { View, Text, Pressable, StyleSheet } from 'react-native';

const PressableComponent = () => {

    function onPress() {
        console.log('Pressable Component');
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onPress} onLongPress={() => console.log('Long Press')}>
                <Text>Pressable Component</Text>
            </Pressable>
        </View>
    );
}

export default PressableComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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