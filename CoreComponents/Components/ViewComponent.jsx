import { View, Text, StyleSheet } from 'react-native';
const ViewComponent = () => {

    return (
        <View style={styles.container}>
            <Text>This is a View Componenet</Text>
            <View style={{ height: 8 }} />  
            <View style={{ height: 100, width: 100, backgroundColor: 'red' }} />  
            <View style={{ height: 8 }} />  
            <View style={{ height: 100, width: 100, backgroundColor: '#003cff' }} />     
            <View style={{ height: 8 }} />  
            <View style={{ height: 100, width: "100%", backgroundColor: '#00ff2a' }} />           
        </View>
    );
}

export default ViewComponent;
export const fullName = 'Richard';

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#ebf4f6df',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
})