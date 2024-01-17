import { useState } from "react";
import { View, Text, StyleSheet, Modal, Pressable, Alert } from "react-native";

const ModalComponent = () => {

    const [modalVisible, setModalVisible] = useState(false);

    function onPress() {
        setModalVisible(!modalVisible);
    }

    return (
        <View style={styles.container}>
            <Text>ModelComponent</Text>
            <Pressable style={styles.button} onPress={onPress}>
                <Text>Open Modal</Text>
            </Pressable>

            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onShow={() => console.log("Modal has been opened.")}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}>

                <View style={styles.modal}>
                    <Text>Hello World!</Text>
                    <Pressable style={styles.button} onPress={onPress}>
                        <Text>Close</Text>
                    </Pressable>
                </View>
            </Modal>

        </View>
    )
}

export default ModalComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        flex: 1,
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(159, 227, 198, 0.5)',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0bdfa3',
        padding: 10,
        width: 200,
        height: 50,
        borderRadius: 8
    }
})