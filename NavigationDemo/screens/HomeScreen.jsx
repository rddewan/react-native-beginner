import { Button, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Setting')} />

            <Button
                title="Go to Settings Push"
                onPress={() => navigation.push('Setting')} />
        </View>
    );
}

export default HomeScreen;
