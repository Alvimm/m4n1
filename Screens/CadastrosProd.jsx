import {FlatList, Image, StyleSheet, Text, View } from 'react-native';
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
    <View style={{ flex: 1 }}>
      <Text style={styles.heading}>Lista de Cadastros</Text>

      <FlatList
      style={{ flex: 1 }}
        data={dadosCadastro}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <Text style={styles.cardText}>{`Nome: ${item.nome}, Endereço: ${item.endereco}, Contato: ${item.contato}, Produto: ${item.produto}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CadastrosProd;

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#000',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 30
  },
  card: {
    backgroundColor: 'lightblue',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
    color: '#000',
  },
  image: {
    width: 50,
    height: 50,
  },
});