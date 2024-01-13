import { View, StyleSheet, Image } from 'react-native';

const ImageComponent = () => {

    return (
        <View style={styles.container}>

            <Image
                source={require('../assets/super_car.jpeg')}
                style={styles.smallLogo}
            />
            <View style={{ height: 8 }} />

            <Image
                source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                }}
                style={styles.logo}
                resizeMode= "center"
                defaultSource={require('../assets/icon.png')}
                onLoadStart={() => console.log("Start")}
                onLoad={(event) => console.log("Load completed")}
                onError={(error) => console.log("Error")}
                onLoadEnd={() => console.log("End")}
            />
        </View>
    );
}

export default ImageComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    smallLogo: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor: 'red',
        borderWidth: 1,
    },
    logo: {
        width: 100,
        height: 100,
    }
    

});