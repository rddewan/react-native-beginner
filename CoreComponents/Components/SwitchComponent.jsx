import { useState } from "react";
import { StyleSheet, Switch, View } from "react-native";


const SwitchComponent = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    function toggleSwitch() {
        setIsEnabled(previousState => !previousState);
    }

    return (
        <View style={styles.container}>
            <Switch 
                value={isEnabled}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                ios_backgroundColor='#da1013'
                onValueChange={toggleSwitch}
            />
        </View>
    )

}

export default SwitchComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    }
})