// import { StyleSheet, TouchableOpacity, View } from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons';

// const Filter = () => {
//   return (
//     <View style={{position: 'absolute', right:15}}>
//         <TouchableOpacity onPress={() => { console.log('clicked') }}>
//           <Icon name="filter" color={'#000'} size={30}  />
//         </TouchableOpacity>

//       </View>
//   )
// }

// export default Filter

// const styles = StyleSheet.create({})

import React, { useState } from 'react';
import { StyleSheet, Modal, TouchableOpacity, View, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Categories from '../assets/Categories';

const Filter = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedChips, setSelectedChips] = useState([]); // State for selected chips

  

  const handleChipPress = (chip) => {
    const newSelectedChips = [...selectedChips]; // Copy to avoid mutation
    const chipIndex = newSelectedChips.findIndex((c) => c.id === chip.id);

    if (chipIndex >= 0) { // Chip already selected, remove it
      newSelectedChips.splice(chipIndex, 1);
    } else { // Chip not selected, add it
      newSelectedChips.push(chip);
    }

    setSelectedChips(newSelectedChips);
  };

  const renderChip = ({ item: chip }) => (
    <TouchableOpacity
      key={chip.id}
      style={styles.chip(selectedChips.includes(chip))} // Dynamic styling based on selection
      onPress={() => handleChipPress(chip)}
    >
      <Text style={styles.chipText}>{chip.text}</Text>
      {selectedChips.includes(chip) && ( // Render close icon for selected chips
        <Icon name="close" color={'#000'} size={16} style={styles.closeIcon} />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={{ position: 'absolute', right: 15 }}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Icon name="filter" color={'#000'} size={30} />
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

            <FlatList // Render chips using FlatList
              data={Categories}
              renderItem={renderChip}
              keyExtractor={(item) => item.id.toString()}
              //horizontal={false} // Display chips vertically
              numColumns={3} // Adjust for desired number of columns per row
              contentContainerStyle={styles.chipList} // Optional styling for chip container
            />

            <TouchableOpacity style={styles.closeBtn} onPress={() => setModalVisible(!modalVisible)}>
              <Icon name="close" color={'#000'} size={30} />
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
    marginTop: 80,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
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
    fontFamily: 'Anta-Regular', // Adjust font family as needed
    color: '#000',
    marginBottom: 10,
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  chip: (isSelected) => ({
    backgroundColor: isSelected ? '#ddd' : '#eee',
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
    fontFamily: 'Anta-Regular', // Adjust font family as needed
    color: '#000',
  },
  closeIcon: {
    marginLeft: 5,
  },
  chipList: {
    // flex: 1,
    padding: 10, // Adjust padding as needed
  },

})

