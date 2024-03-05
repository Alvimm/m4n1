import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect, useMemo } from 'react';
import SearchBar from '../components/SearchBar';

const ListaFornecedores = ({ route }) => {
  const [dadosCadastro, setDadosCadastro] = useState(route.params ? route.params.dadosCadastro : []);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setDadosCadastro(route.params ? route.params.dadosCadastro : []);
  }, [route]);

  const filteredData = useMemo(() => {
    if (!search) return dadosCadastro;
    return dadosCadastro.filter((item) => {
      return (
        item.nome.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [dadosCadastro, search]);

  return (
    <View style={styles.container}>
      <SearchBar search={search} setSearch={setSearch} />
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
                <Text style={{ fontFamily: 'Anta-Regular', color: '#0D6368', fontSize: 13 }}>{`${item.contato}`}</Text>
                <Text style={styles.cardText}>{`${item.nome}`}</Text>
                <Text style={styles.categoryText}>{`${item.categoria}`}</Text>
                <Text style={{ fontFamily: 'Anta-Regular', color: 'gray', fontSize: 16 }}>{`${item.endereco}`}</Text>
              </View>
            </View>
          )
        }}
      />
    </View>
  );
};

export default ListaFornecedores;

const styles = StyleSheet.create({
  container: { flex: 1, 
    backgroundColor: '#3bf6ff',
    paddingTop: 10,
    paddingHorizontal:10
   },
  listContainer: {
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    marginVertical: 10,
    // padding: 10,
    backgroundColor: '#2ADBE5',
    borderRadius: 10,
    alignItems: 'center',
  },
  cardText: {
    fontFamily: 'Anta-Regular',
    fontSize: 30,
    color: '#000',
  },
  categoryText: {
    fontFamily: 'Anta-Regular',
    color: '#fff',
    fontSize: 20,
    backgroundColor: '#FF547480',
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
  }
});
