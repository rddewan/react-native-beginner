import { Button, Text, View } from 'react-native';

const SettingScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Setting Screen</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')} />

            <Button
                title="Go Back"
                onPress={() => navigation.goBack()} />
        </View>
    );
}

export default SettingScreen;