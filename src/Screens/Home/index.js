import React, { useEffect, useState } from 'react';
import { Constant } from '../../Utils'
import styles from './styles';
import firestore from '@react-native-firebase/firestore';
import { View, Text, FlatList, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, InputField, NumericInput, Dropdown } from '../../Component';

const Home = () => {
  // state variables
  const [list, setList] = useState([{}, {}]);
  const [dropdownData, setDropdownData] = useState(Constant.CategoryList);
  const [modalVisible, setModalVisible] = useState([false]);
  const [delModVisible, setDelModVisible] = useState([false]);
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [selected, setSelected] = useState({});
  const [price, setPrice] = useState('');

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => { // data fetch from Firestore
    firestore()
      .collection('List')
      .get()
      .then(querySnapshot => {
        console.log('Total items: ', querySnapshot);
        var collection = []
        querySnapshot.forEach(documentSnapshot => {
          collection.push({
            ID: documentSnapshot.id,
            category: documentSnapshot.data().category,
            price: documentSnapshot.data().price,
            productName: documentSnapshot.data().productName
          })
          // console.log('item ID: ', documentSnapshot.id, documentSnapshot.data());
        });
        // console.log('List : ', collection);
        setList(collection)
      });
  }

  const onAdditem = () => {
    setModalVisible(!modalVisible)
  }

  const loadForm = () => { // Form Modal
    const getNum = (value) => {
      setPrice(value.replace(/[^0-9]/g, ''))
    }

    const resetValues = () => { // After save data , field will reset
      setProductName('')
      setCategory('')
      setPrice('')
    }

    const submitForm = () => { // on Submit data will save into Firestore
      if (productName.length == 0) {
        alert('Please enter product name.');
      } else if (category.length == 0) {
        alert('Please Select Category');
      } else if (price.length == 0 || parseFloat(price) < 0.0) {
        alert('Please Enter any Price');
      } else {
        firestore().collection('List').add({
          productName: productName,
          category: category,
          price: parseFloat(price),
        }).then(() => {
          alert('Product Added Sucessfully!')
          fetchData()
          onAdditem()
        }).catch(error => {
          console.log('@=> Error : ', error);
        });
      }
      resetValues()
    }

    return ( // Form modal
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView]}>
            <Text style={styles.modalText}>Add Item</Text>
            <View style={styles.inputParent}>
              <InputField
                placeholder={'Product Name'}
                getText={setProductName}
                Text={productName}
              />
            </View>
            <View style={styles.inputParent}>
              <Dropdown
                List={dropdownData}
                setSelected={setCategory}
              />
            </View>
            <View style={styles.inputParent}>
              <NumericInput
                placeholder={'Price'}
                getText={getNum}
                Text={price}
              />
            </View>
            <View style={[styles.inputParent]}>
              <Button title={'Add'} onClick={submitForm} />
            </View>
            <View style={[styles.inputParent]}>
              <Button title={'Close'} onClick={onAdditem} />
            </View>
          </View>
        </View>
      </Modal>
    )
  }

  const DeleteModal = () => { // Delete Modal
    const onCancel = () => {
      setDelModVisible(!delModVisible)
    }

    const ondelete = () => { // on delete data will remove from list as well as from Firestore
      if (selected.ID != null) {
        firestore().collection('List').doc(selected.ID).delete().then(() => {
          console.log('item Deleted');
          alert('Item Deleted Sucessfully!')
          fetchData()
        });
      } else {
        alert('long press on any item first!')
      }
      setDelModVisible(!delModVisible)
    }

    return (// Delete popup
      <Modal
        animationType="fade"
        transparent={true}
        visible={delModVisible}
        onRequestClose={() => {
          setDelModVisible(!delModVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView]}>
            <Text style={styles.modalText}>Do you want to Delete the selected item ?</Text>
            <View style={[styles.inputParent]}>
              <Button title={'Cancel'} onClick={onCancel} />
            </View>
            <View style={[styles.inputParent]}>
              <Button title={'Delete'} onClick={ondelete} />
            </View>
          </View>
        </View>
      </Modal>
    )
  }

  const AddButton = () => ( // Add Button
    <View style={styles.buttonContainer}>
      <Button title={'Add Item'} onClick={onAdditem} />
    </View>
  )

  const MyList = () => { // List
    const seprater = () => (
      <View style={{ height: 10 }}>
      </View>
    )

    const renderitem = ({ item }) => ( // render item for List
      <TouchableOpacity style={styles.renderParent} onLongPress={() => {
        setSelected(item)
        setDelModVisible(!delModVisible)
      }}>
        <View style={styles.renderItemParent}>
          <Text style={styles.renderItemTitle}>Product Name : </Text>
          <Text style={styles.renderItemValue}>{item.productName}</Text>
        </View>
        <View style={styles.renderItemParent}>
          <Text style={styles.renderItemTitle}>Category : </Text>
          <Text style={styles.renderItemValue}>{item.category}</Text>
        </View>
        <View style={styles.renderItemParent}>
          <Text style={styles.renderItemTitle}>Price : </Text>
          <Text style={styles.renderItemValue}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    )

    return (
      <FlatList
        style={{ width: '90%', marginTop: 50 }}
        data={list}
        ItemSeparatorComponent={seprater}
        renderItem={renderitem}
      />
    )
  }

  return (
    <View style={styles.container}>
      {AddButton()}
      {MyList()}
      {loadForm()}
      {DeleteModal()}
    </View>
  );
}

export default Home;
