import { StyleSheet, ActivityIndicator, View } from "react-native";


const LoadingComponent = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#37a135" animating={true}/>
        </View>
        
    );
}

export default LoadingComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})