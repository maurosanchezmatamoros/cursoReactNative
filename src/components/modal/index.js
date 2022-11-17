import { styles } from "./styles"
import { Modal, Button, View, Text } from "react-native"

const ModalView = ({ selectedItem, modalVisible, handleCancel, handleDelete }) => {
    return(
        <Modal visible={modalVisible} animationType='fade'>
        <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Item seleccionado</Text>
            <Text style={styles.modalValue}>{selectedItem?.value}</Text>
            <Text style={styles.modalText}>¿Estás seguro de eliminarlo?</Text>
            <View style={styles.modalButtons}>
                <Button 
                title='   SI   '
                color='#D80B0B'
                onPress={handleDelete}
                />
                <Button 
                title='   NO   '
                color='#D80B0B'
                onPress={handleCancel}
                />
            </View>
        </View>
    </Modal>
    )
}

export default ModalView