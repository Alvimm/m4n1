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
      <Text style={styles.heading}>Cadastro</Text>
      <TextInput
        inputMode='text'
        style={styles.input}
        placeholder="Digite o nome"
        placeholderTextColor="gray"
        onChangeText={setNome}
        value={nome}
      />

      <TextInput
        inputMode='text'
        style={styles.input}
        placeholder="Digite o endereço"
        placeholderTextColor="gray"
        onChangeText={setEndereco}
        value={endereco}
      />

      <TextInput
        inputMode='tel'
        maxLength={13}
        style={styles.input}
        placeholder="Digite o contato"
        placeholderTextColor="gray"
        onChangeText={setContato}
        value={contato}
      />


      <TextInput
        inputMode='text'
        style={styles.input}
        placeholder="Digite a categoria"
        placeholderTextColor="gray"
        onChangeText={setCategoria}
        value={categoria}
      />

      <TouchableOpacity style={styles.btnImg} onPress={ImagePicker} >
        <Text style={styles.btnText}>Escolha sua foto</Text>
        {imagem && <Image source={{ uri: imagem }} style={{
          width: 30, height: 30
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
      backgroundColor: '#121212',
    },
    heading: {
      fontFamily: 'Anta-Regular',
      fontSize: 50,
      color: '#fff',
      alignSelf: 'center',
      marginBottom: 20,
      marginTop: 30,
    },
    text: {
      fontFamily: 'Anta-Regular',
      fontSize: 20,
      color: '#fff',
    },
    input: {
      fontFamily: 'Anta-Regular',
      height: 40,
      marginBottom: 30,
      color: '#fff',
      borderBottomColor: '#fff',
      borderBottomWidth: 1,
    },
    btnImg: {
      alignItems: 'center',
      marginTop: 10,
      backgroundColor: 'rgba(18, 18, 18, 0.8)',
      borderColor: '#fff',
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    btn: {
      alignItems: 'center',
      marginTop: 50,
      backgroundColor: '#3700B3',
      padding: 20,
      borderRadius: 5,
    },
    btnText: {
      fontFamily: 'Anta-Regular',
      color: '#fff',
      fontSize: 20,
    },
  });
