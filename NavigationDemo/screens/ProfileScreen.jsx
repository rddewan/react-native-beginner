import { Button, Text, View } from 'react-native';

const ProfileScreen = ({ navigation, route }) => {
    const params = route.params;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile Screen</Text>
            <Text>id: {params.id}</Text>
            <Text>name: {params.name}</Text>
            <Text>age: {params.age}</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home', { success: true, message: 'We are good to go' })} />

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