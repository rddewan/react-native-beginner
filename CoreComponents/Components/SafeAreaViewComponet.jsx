import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const SafeAreaViewComponet = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>SafeAreaViewComponet</Text>
            </View>
        </SafeAreaView>
    );
}

export default SafeAreaViewComponet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})