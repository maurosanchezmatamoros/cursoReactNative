import { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { AddItem, Item, List, ModalView } from './components';

export default function App() {
  const [textItem, setTextItem] = useState('')
  const [shopList, setShopList] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [itemChecked, setItemChecked] = useState(false)

  const handleOnChange = (e) => {
    setTextItem(e)
  }
  
  const addItem = () => {
    setShopList(current => [
      ...current,
      {id: shopList.length == 0 ? 1 : shopList[shopList.length - 1].id + 1,
      value: textItem,
      checked: false
      }
    ])
    setTextItem('')
  }

  const handleSelect = (item) => {
    setSelectedItem(item)
    setModalVisible(!modalVisible)
  }

  const handleDelete = () => {
    const newList = shopList.filter(item => item.id != selectedItem.id)
    setShopList(newList)
    setModalVisible(!modalVisible)
  }

  const handleCancel = () => {
    setModalVisible(!modalVisible)
    setSelectedItem(null)
  }

  const handleCheck = (item) => {
    const itemToCheck = shopList.find(el => el.id == item.id)
    item.checked = !item.checked
    setItemChecked(!itemChecked)
  }

  const renderItem = ({ item }) => (
    <Item item={item} handleSelect={handleSelect} handleCheck={handleCheck}/>
  )

  return (
    <View style={styles.container}>
      <AddItem handleOnChange={handleOnChange} addItem={addItem} textItem={textItem} />
      <Text style={styles.title}>Lista de compras</Text>
      <List shopList={shopList} renderItem={renderItem} />
      <ModalView selectedItem={selectedItem} modalVisible={modalVisible} handleCancel={handleCancel} handleDelete={handleDelete} />
    </View>
  );
}
