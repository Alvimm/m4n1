import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
// import Icon from 'react-native-vector-icons/Ionicons';
import Filter from '../components/Filter';
import { styles } from './stylesSL';




const SuppliersList = ({ route }) => {
  const [registrationData, setRegistrationData] = useState(route.params ? route.params.registrationData : []);
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  

  useEffect(() => {
    setRegistrationData(route.params ? route.params.registrationData : []);
  }, [route]);

  const handleFilterChange = (categories) => {
    setSelectedCategories(categories);
  };
  
  const filteredData = useMemo(() => {
    let filtered = registrationData;
  
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(item => selectedCategories.some(chip => chip.text === item.category));
    }
  
    if (search) {
      filtered = filtered.filter(item => item.nome.toLowerCase().includes(search.toLowerCase()));
    }
  
    return filtered;
  }, [registrationData, search, selectedCategories]);

  return (
    <View style={styles.container}>
      <SearchBar search={search} setSearch={setSearch} />
      <Filter onFilterChange={handleFilterChange} />
      <FlatList
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={{ fontFamily: 'Kanit-Regular', color: 'gray', fontSize: 13 }}>{`${item.contact}`}</Text>
                <Text style={styles.cardText}>{`${item.name}`}</Text>
                <Text style={styles.categoryText}>{`${item.category}`}</Text>
                <Text style={{ fontFamily: 'Kanit-Regular', color: 'gray', fontSize: 16 }}>{`${item.address}`}</Text>
              </View>
              {/* <TouchableOpacity onPress={() => console.log('deleted')} style={styles.deleteButton}>
              <Icon name="trash" color={'red'} size={30} />
              </TouchableOpacity> */}
            </View>
          )
        }}
      />
    </View>
  );
};

export default SuppliersList;




