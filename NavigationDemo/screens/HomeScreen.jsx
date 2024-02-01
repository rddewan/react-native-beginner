import { useEffect } from 'react';
import { Button, Text, View } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
    const params = route.params;
    console.log('params', params);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
            <Text>Success: {params?.success.toString() ?? 'no value'}</Text>
            <Text>HMessage: {params?.message ?? 'no value passed from profile screen'} </Text>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate(
                    'Setting', 
                    { id: 1, name: 'Jane' },
                )} />

            <Button
                title="Go to Settings Push"
                onPress={() => navigation.push('Setting', { id: 1, name: 'Jane' })} />
        </View>
    );
}

export default HomeScreen;
