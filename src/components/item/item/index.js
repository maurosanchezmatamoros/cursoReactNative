import { styles } from './styles'
import { Text, View } from 'react-native'
import CheckSvg from '../../svg/check'

const Item = ({ item, handleSelect, handleCheck }) => {
    return(
        <View key={item.id} style={item.checked? styles.itemsChecked : styles.items}>
            <Text style={styles.itemsText}>
                {item.id}- {item.value}
            </Text>
            <View style={styles.itemsButtons}>
                <CheckSvg onPress={() => handleCheck(item)} />
                <Text style={styles.itemsDelete} onPress={() => handleSelect(item)}>X</Text>
            </View>
        </View>
    )
}

export default Item