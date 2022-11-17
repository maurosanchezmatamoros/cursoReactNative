import { styles } from './styles'
import { TextInput, Button, View } from 'react-native'

const AddItem = ({ handleOnChange, addItem, textItem }) => {
    
    return (
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            placeholder= '  Ingrese un item'
            onChangeText={handleOnChange}
            value={textItem} />
            <Button disabled={!textItem} title='Add' color='#aaa' onPress={addItem} />
        </View>
    )
}

export default AddItem