import { Button, Text, View } from 'react-native';

const SettingScreen = ({ navigation, route }) => {
    const params = route.params;
    const {id, name} = route.params;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Setting Screen</Text>
            <Text>id: {id}</Text>
            <Text>name: {name}</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate(
                    'Profile',
                    { id: 1, name: 'Richard Dewan', age:  30 },
                )} />

            <Button
                title="Go Back"
                onPress={() => navigation.goBack()} />
        </View>
    );
}

export default SettingScreen;