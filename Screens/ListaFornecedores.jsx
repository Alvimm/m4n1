// import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
// import React, { useState } from 'react';
// import { useFocusEffect } from '@react-navigation/native';
// import SearchBar from '../components/SearchBar';

// const ListaFornecedores = ({ route}) => {
//   const [dadosCadastro, setDadosCadastro] = useState(route.params ? route.params.dadosCadastro : []);
//   useFocusEffect(
//     React.useCallback(() => {
//       setDadosCadastro(route.params ? route.params.dadosCadastro : []);
//     }, [route])
//   );
//   return (
//     <View style={{ flex: 1, backgroundColor:'#121212' }}>
//       <Text style={styles.heading}>Fornecedores</Text>
//       <SearchBar />

//       <FlatList
//         style={styles.container}
//         showsVerticalScrollIndicator={false}
//         data={dadosCadastro}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => {
//           // if (search === ''){
//             // console.log(search)
//             return (
//               <View style={styles.card}>
//                 <Image source={{ uri: item.imagem }} style={styles.image} />
//                 <View style={styles.textContainer}>
//                   <Text style={{ fontFamily: 'Anta-Regular', color: 'gray', fontSize: 13 }}>{`${item.contato}`}</Text>
//                   <Text style={styles.cardText}>{`${item.nome}`}</Text>
//                   <Text style={{fontFamily: 'Anta-Regular', color: 'gray', fontSize: 14 }}>{`${item.categoria}`}</Text>
//                   <Text style={{fontFamily: 'Anta-Regular', color: 'lightgray', fontSize: 16 }}>{`${item.endereco}`}</Text>
//                 </View>
//               </View>
//             )
//           // }
        
//         }}
//       />
//     </View>
//   );
// };

// export default ListaFornecedores;

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//   },
//   heading: {
//     fontFamily: 'Anta-Regular',
//     fontSize: 50,
//     color: '#fff',
//     alignSelf: 'center',
//     marginBottom: 20,
//     marginTop: 30
//   },
//   card: {
//     flexDirection: 'row',
//     margin: 10,
//     padding: 10,
//     backgroundColor: '#1e1e1e',
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   cardText: {
//     fontFamily: 'Anta-Regular',
//     fontSize: 25,
//     color: '#fff',
//   },
//   textContainer:{
//     marginLeft: 15,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 15,
//   },
// });


import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect, useMemo } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import SearchBar from '../components/SearchBar';

const ListaFornecedores = ({ route}) => {
  const [dadosCadastro, setDadosCadastro] = useState(route.params ? route.params.dadosCadastro : []);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setDadosCadastro(route.params ? route.params.dadosCadastro : []);
  }, [route]);

  const filteredData = useMemo(() => {
    if (!search) return dadosCadastro;
    return dadosCadastro.filter((item) => {
      return (
        item.nome.toLowerCase().includes(search.toLowerCase()) ||
        item.categoria.toLowerCase().includes(search.toLowerCase()) ||
        item.endereco.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [dadosCadastro, search]);

  return (
    <View style={{ flex: 1, backgroundColor:'#121212' }}>
      <Text style={styles.heading}>Fornecedores</Text>
      <SearchBar search={search} setSearch={setSearch} />

      <FlatList
        style={styles.container}
        showsVerticalScrollIndicator={false}
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Image source={{ uri: item.imagem }} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={{ fontFamily: 'Anta-Regular', color: 'gray', fontSize: 13 }}>{`${item.contato}`}</Text>
                <Text style={styles.cardText}>{`${item.nome}`}</Text>
                <Text style={{fontFamily: 'Anta-Regular', color: 'gray', fontSize: 14 }}>{`${item.categoria}`}</Text>
                <Text style={{fontFamily: 'Anta-Regular', color: 'lightgray', fontSize: 16 }}>{`${item.endereco}`}</Text>
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
  container: {
    padding: 10,
  },
  heading: {
    fontFamily: 'Anta-Regular',
    fontSize: 50,
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 30
  },
  card: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    alignItems: 'center',
  },
  cardText: {
    fontFamily: 'Anta-Regular',
    fontSize: 25,
    color: '#fff',
  },
   textContainer:{
    marginLeft: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  }});
