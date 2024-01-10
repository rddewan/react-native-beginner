import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
const TextComponent = () => {

    const [text1, setText1] = useState(' World.')

    function onPresstext() {
        setText1(' Friend!')
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.baseText}>This is a Text Component</Text>
            <Text style={styles.text1}>Hello World</Text>

            <Text style={styles.baseText} onPress={onPresstext}>
            This!....
                <Text style={styles.text1}>This is 1</Text>
                <Text style={styles.text1}>{text1}</Text>
            </Text>
        </View>
    )
}

export default TextComponent;

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Cochin',
        fontSize: 24
    },
    text1: {
        color: 'red',
        fontSize: 18,
    }
})

