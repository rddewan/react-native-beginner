import { ImageBackground, StyleSheet, Text, View } from "react-native";


const BackgroundImageComponent = () => {
    return (

        <ImageBackground
            source={require('../assets/super_car.jpeg')}
            style={styles.image}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/super_car.jpeg')}
                    style={styles.image}
                    resizeMode="cover"
                >
                    <Text style={styles.text}>Hello World</Text>
                </ImageBackground>
            </View>
        </ImageBackground >

    )
}

export default BackgroundImageComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
    }
})