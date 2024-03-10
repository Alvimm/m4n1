import React, { useState } from 'react';
import { StyleSheet, Modal, TouchableOpacity, View, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Categories from '../assets/Categories';

const Filter = ({ onFilterChange }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedChips, setSelectedChips] = useState([]); 

  const handleChipPress = (chip) => {
    setSelectedChips((prevChips) => {
      const isAlreadySelected = prevChips.some((c) => c.id === chip.id);
      let newChips;
      if (isAlreadySelected) {
        newChips = prevChips.filter((c) => c.id !== chip.id);
      } else {
        newChips = [...prevChips, chip];
      }
      onFilterChange(newChips); // Chame onFilterChange após atualizar selectedChips
      return newChips;
    });
  };
  const renderChip = ({ item: chip }) => {
    const isSelected = selectedChips.some((c) => c.id === chip.id);
  
    return (
      <TouchableOpacity
        key={chip.id}
        style={styles.chip(isSelected)}
        onPress={() => handleChipPress(chip)}
      >
        <Text style={styles.chipText}>{chip.text}</Text>
        {isSelected && (
          <Icon name="close" color={'#fff'} size={16} style={styles.closeIcon} />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ position: 'absolute', right: 15, top:25 }}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Icon name="filter" color={'#0009'} size={40} />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Filtros</Text>

            <FlatList
              data={Categories}
              renderItem={renderChip}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              contentContainerStyle={styles.chipList}
            />

            <TouchableOpacity style={styles.closeBtn} onPress={() => setModalVisible(!modalVisible)}>
              <Icon name="close" color={'#fff'} size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    justifyContent: "flex-end",
  },
  modalView: {
    backgroundColor: "#000",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 20,
    fontFamily: 'Anta-Regular',
    color: '#fff',
    marginBottom: 10,
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  chip: (isSelected) => ({
    backgroundColor: isSelected ? '#0008' : '#0004',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: isSelected ? '#ddd' : '#ccc',
  }),
  chipText: {
    fontSize: 16,
    fontFamily: 'Anta-Regular',
    color: '#fff',
  },
  closeIcon: {
    marginLeft: 5,
  },
  chipList: {
    padding: 10,
  },

})

