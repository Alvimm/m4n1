import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';



const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');
  const [categoria, setCategoria] = useState('');
  const [dadosCadastro, setDadosCadastro] = useState([]);
  const [imagem, setImagem] = useState('');
  const navigation = useNavigation();

  const ImagePicker = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };
    launchImageLibrary(options, (response) => {
      if (response.assets && response.assets[0].uri) {
        setImagem(response.assets[0].uri);
      }
    });
  };

  const handleCadastrar = () => {
    if (nome !== '' && endereco !== '' && contato !== '' && categoria !== '' && imagem !== '') {
      const novoCadastro = { nome, endereco, contato, categoria, imagem };
      const novosDadosCadastro = [...dadosCadastro, novoCadastro];
      setDadosCadastro(novosDadosCadastro);
      navigation.navigate('fornecedores', { dadosCadastro: novosDadosCadastro });
      setNome('');
      setEndereco('');
      setContato('');
      setCategoria('');
      setImagem('');

    } else {
      alert('Preencha todos os campos obrigatórios');
    }
  };
  return (
    <View style={styles.container}>
      <Image source={require('../src/assets/logo.png')} style={{ width: 200, height: 200, alignSelf: 'center', marginTop: 10 }} />
      <Text style={styles.heading}>Cadastro</Text>
      <TextInput
        inputMode='text'
        style={styles.input}
        placeholder="Digite o nome"
        placeholderTextColor="#0D6368"
        onChangeText={setNome}
        value={nome}
      />

      <TextInput
        inputMode='text'
        style={styles.input}
        placeholder="Digite o endereço"
        placeholderTextColor="#0D6368"
        onChangeText={setEndereco}
        value={endereco}
      />

      <TextInput
        inputMode='tel'
        maxLength={13}
        style={styles.input}
        placeholder="Digite o contato"
        placeholderTextColor="#0D6368"
        onChangeText={setContato}
        value={contato}
      />


      <TextInput
        inputMode='text'
        style={styles.input}
        placeholder="Digite a categoria"
        placeholderTextColor="#0D6368"
        onChangeText={setCategoria}
        value={categoria}
      />

      <TouchableOpacity style={styles.btnImg} onPress={ImagePicker} >
        <Text style={styles.btnText}>Escolha sua foto</Text>
        {imagem && <Image source={{ uri: imagem }} style={{
          width: 30, height: 30, borderColor: '#FF5474', borderWidth: 2, borderRadius: 5, marginLeft: 10,
        }} />}
        {/* {imagem ? <Text style={styles.text}>Imagem selecionada ✔️</Text> : null} */}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          handleCadastrar();
        }}
      ><Text style={styles.btnText}>Cadastrar</Text></TouchableOpacity>
    </View>
  );
};

export default Cadastro;

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: '#2ADBE5',
    },
    heading: {
      fontFamily: 'Anta-Regular',
      fontSize: 50,
      color: '#000',
      alignSelf: 'center',
      marginBottom: 20,
      marginTop: 30,
    },
    text: {
      fontFamily: 'Anta-Regular',
      fontSize: 20,
      color: '#000',
    },
    input: {
      fontFamily: 'Anta-Regular',
      height: 40,
      marginBottom: 30,
      color: '#000',
      borderBottomColor: '#0D6368',
      borderBottomWidth: 1,
    },
    btnImg: {
      alignItems: 'center',
      marginTop: 10,
      backgroundColor: '#3CF3FB',
      borderColor: '#000',
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    btn: {
      alignItems: 'center',
      marginTop: 50,
      backgroundColor: '#FF5474',
      padding: 20,
      borderRadius: 5,
      borderColor: '#000',
      borderWidth: 1,
    },
    btnText: {
      fontFamily: 'Anta-Regular',
      color: '#000',
      fontSize: 22,
    },
  });
