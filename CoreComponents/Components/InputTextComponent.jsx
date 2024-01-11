import { useState } from "react";
import { TextInput, StyleSheet, View, Text } from "react-native"

const InputTextComponent = () => {
    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    const [bio, setBio] = useState('');

    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <View style={{ height: 8 }} />
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                autoFocus={true}
                keyboardType="default"
                returnKeyType="next"
                //defaultValue="Name"
                value={name}
                onChangeText={setName}
            />

            <View style={{ height: 8 }} />

            <TextInput
                style={styles.input}
                placeholder="Enter your age"
                //keyboardType="default"
                inputMode="numeric"
                returnKeyType="next"
                //defaultValue="Name"
                value={age}
                onChangeText={setAge}
            />

            <View style={{ height: 8 }} />

            <TextInput
                style={styles.inputMultiLine}
                placeholder="Enter your bio"
                multiline={true}
                maxLength={10}
                numberOfLines={5}
                //keyboardType="default"
                inputMode="text"
                returnKeyType="next"
                //defaultValue="Name"
                value={bio}
                onChangeText={setBio}
                editable={false}
            />

        </View>
    );
}

export default InputTextComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#544d4d',
        borderRadius: 8,
        padding: 8,
        width: '100%',
        height: 54,
    },
    inputMultiLine: {
        borderWidth: 1,
        borderColor: '#544d4d',
        borderRadius: 8,
        padding: 8,
        width: '100%',       
    }
});