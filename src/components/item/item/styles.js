import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    items: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#aaa',
        height: 48,
        width: '100%',
        paddingHorizontal: 10,
        marginVertical: 5,
        color: '#fff',
        borderRadius: 5
    },
    itemsChecked: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'green',
        height: 48,
        width: '100%',
        paddingHorizontal: 10,
        marginVertical: 5,
        color: '#fff',
        borderRadius: 5
    },
    itemsText: {
        fontSize: 24
    },
    itemsDelete: {
        fontSize: 24,
        color: '#fff',
        backgroundColor: '#D80B0B',
        borderRadius: 5,
        width: 32,
        height: 32,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginLeft: 6
    },
    itemsButtons: {
        flexDirection: 'row'
    }
})