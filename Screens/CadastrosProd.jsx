import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
const CadastrosProd = ({ route }) => {
  const [dadosCadastro, setDadosCadastro] = useState(route.params ? route.params.dadosCadastro : []);
  useFocusEffect(
    React.useCallback(() => {
      setDadosCadastro(route.params ? route.params.dadosCadastro : []);
    }, [route])
  );
  return (
    <View style={{ flex: 1, backgroundColor:'#121212' }}>
      <Text style={styles.heading}>Lista de Cadastros</Text>

      <FlatList
        style={styles.container}
        showsVerticalScrollIndicator={false}
        data={dadosCadastro}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={{ fontFamily: 'Anta-Regular', color: 'gray', fontSize: 13 }}>{`${item.contato}`}</Text>
              <Text style={styles.cardText}>{`${item.nome}`}</Text>
              <Text style={{fontFamily: 'Anta-Regular', color: 'gray', fontSize: 14 }}>{`${item.produto}`}</Text>
              <Text style={{fontFamily: 'Anta-Regular', color: 'lightgray', fontSize: 16 }}>{`${item.endereco}`}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CadastrosProd;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    // fontWeight: 'bold',
    fontFamily: 'Anta-Regular',
    fontSize: 40,
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
  },
});