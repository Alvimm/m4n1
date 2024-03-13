import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
// import Icon from 'react-native-vector-icons/Ionicons';
import Filter from '../components/Filter';
import Colors from '../assets/Colors';




const ListaFornecedores = ({ route }) => {
  const [dadosCadastro, setDadosCadastro] = useState(route.params ? route.params.dadosCadastro : []);
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  

  useEffect(() => {
    setDadosCadastro(route.params ? route.params.dadosCadastro : []);
  }, [route]);

  const handleFilterChange = (categories) => {
    setSelectedCategories(categories);
  };
  
  const filteredData = useMemo(() => {
    let filtered = dadosCadastro;
  
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(item => selectedCategories.some(chip => chip.text === item.categoria));
    }
  
    if (search) {
      filtered = filtered.filter(item => item.nome.toLowerCase().includes(search.toLowerCase()));
    }
  
    return filtered;
  }, [dadosCadastro, search, selectedCategories]);

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
              <Image source={{ uri: item.imagem }} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={{ fontFamily: 'Kanit-Regular', color: 'gray', fontSize: 13 }}>{`${item.contato}`}</Text>
                <Text style={styles.cardText}>{`${item.nome}`}</Text>
                <Text style={styles.categoryText}>{`${item.categoria}`}</Text>
                <Text style={{ fontFamily: 'Kanit-Regular', color: 'gray', fontSize: 16 }}>{`${item.endereco}`}</Text>
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

export default ListaFornecedores;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingTop: 10,
    paddingHorizontal: 10
  },
  listContainer: {
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: Colors.blackSecondary,
    borderRadius: 10,
    alignItems: 'center',
  },
  cardText: {
    fontFamily: 'Kanit-Regular',
    fontSize: 30,
    color: Colors.white,
  },
  categoryText: {
    fontFamily: 'Kanit-Medium',
    color: Colors.white,
    fontSize: 20,
    backgroundColor: Colors.whiteWithMoreOpacity,
    borderRadius: 5,
    padding: 4,
    alignSelf: 'flex-start',
  },
  textContainer: {
    marginLeft: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
//   deleteButton: {
//     position: 'absolute',
//     right: 10,
//     top: 10,
//   },
});


