import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    modalContainer: {
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalTitle: {
        fontSize: 24
    },
    modalValue: {
        fontSize: 28,
        marginVertical: 10
    },
    modalText: {
        fontSize: 24
    },
    modalButtons: {
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-around',
        marginVertical: 20
    }
})