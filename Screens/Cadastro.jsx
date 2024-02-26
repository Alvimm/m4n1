import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import  {launchImageLibrary}  from 'react-native-image-picker';



const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');
  const [produto, setProduto] = useState('');
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
      if(response.assets[0].uri){
        setImagem(response.assets[0].uri);
      }
    });
  };

  const handleCadastrar = () => {
    if (nome !== '' && endereco !== '' && contato !== '' && produto !== '' && imagem !== '') {
      const novoCadastro = { nome, endereco, contato, produto, imagem };
      const novosDadosCadastro = [...dadosCadastro, novoCadastro];
      setDadosCadastro(novosDadosCadastro);
      navigation.navigate('produtos', { dadosCadastro: novosDadosCadastro });
      setNome('');
      setEndereco('');
      setContato('');
      setProduto('');
      setImagem('');

    } else {
      alert('Preencha todos os campos obrigatórios');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome"
        placeholderTextColor="gray"
        onChangeText={setNome}
        value={nome}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o endereço"
        placeholderTextColor="gray"
        onChangeText={setEndereco}
        value={endereco}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o contato"
        placeholderTextColor="gray"
        onChangeText={setContato}
        value={contato}
      />


      <TextInput
        style={styles.input}
        placeholder="Digite o produto"
        placeholderTextColor="gray"
        onChangeText={setProduto}
        value={produto}
      />

      <TouchableOpacity style={styles.btnImg} onPress={ImagePicker} >
        <Text style={styles.btnText}>Escolha uma imagem</Text>
      {/* {imagem && <Image source={{ uri: imagem }} style={{ width: 200, height: 200 }} />} */}
      {imagem ? <Text style={styles.text}>Imagem selecionada ✔️</Text> : null}
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
    container:{
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: '#121212',
    },
    heading: {
      fontWeight: 'bold',
      fontSize: 40,
      color: '#fff',
      alignSelf: 'center',
      marginBottom: 20,
      marginTop: 30,
    },
    text: {
      fontSize: 20,
      color: '#fff',
    },
    input: {
      height: 40,
      marginBottom: 30,
      color: '#fff',
      borderBottomColor: '#fff',
      borderBottomWidth: 1,
    },
    btnImg: {
      alignItems: 'center',
      marginTop: 10,
      backgroundColor: 'green',
      padding: 10,
      borderRadius: 5,
    },
    btn: {
      alignItems: 'center',
      marginTop: 10,
      backgroundColor: '#3700B3',
      padding: 20,
      borderRadius: 5,
    },
    btnText: {
      color: '#fff',
      fontSize: 20,
    },
  });
