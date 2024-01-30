import { Button, Text, View } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile Screen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')} />

            <Button
                title="Go to Home PopToTop"
                onPress={() => navigation.popToTop()} />

            <Button
                title="Go Back"
                onPress={() => navigation.goBack()} />
        </View>
    );
}

export default ProfileScreen;