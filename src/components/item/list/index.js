import { styles } from './styles'
import { FlatList } from 'react-native'

const List = ({ shopList, renderItem }) => {
    return(
        <FlatList
            style={styles.itemsContainer}
            data={shopList}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}

export default List