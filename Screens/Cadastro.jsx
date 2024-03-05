import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, Image, ToastAndroid, View, ScrollView, Alert } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';


const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');
  const [categoria, setCategoria] = useState('');
  const [dadosCadastro, setDadosCadastro] = useState([]);
  const [imagem, setImagem] = useState('');
  const navigation = useNavigation();

  const showToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Preencha todos os campos',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  }

  // const ImagePicker = () => {
  //   let options = {
  //     storageOptions: {
  //       path: 'image',
  //     },
  //   };
  //   launchImageLibrary(options, (response) => {
  //     if (response.assets && response.assets[0].uri) {
  //       setImagem(response.assets[0].uri);
  //     }
  //   });
  //   launchCamera(options, (response) => {
  //     if (response.assets && response.assets[0].uri) {
  //       setImagem(response.assets[0].uri);
  //     }
  //   });
  // };
  const ImagePicker = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };
  
    Alert.alert(
      'Escolha uma opção',
      'Deseja abrir a câmera ou a biblioteca de imagens?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Abrir câmera',
          onPress: () => launchCamera(options, (response) => {
            if (response.assets && response.assets[0].uri) {
              setImagem(response.assets[0].uri);
            }
          }),
        },
        {
          text: 'Abrir biblioteca de imagens',
          onPress: () => launchImageLibrary(options, (response) => {
            if (response.assets && response.assets[0].uri) {
              setImagem(response.assets[0].uri);
            }
          }),
        },
      ],
      { cancelable: true },
    );
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
      showToast();
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../src/assets/logo.png')} style={styles.logo} />
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
        {imagem && (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={{ uri: imagem }}
              style={{
                width: 30,
                height: 30,
                borderColor: 'green',
                borderWidth: 2,
                borderRadius: 5,
                marginLeft: 10,
                marginRight: 2,
              }}
            />
            <Icon name="checkmark-circle" color={'green'} size={20} />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          handleCadastrar();
        }}
      ><Text style={styles.btnText}>Cadastrar</Text></TouchableOpacity>
    </ScrollView>
  );
};

export default Cadastro;

const styles = StyleSheet.create(
  {
    container: {
      paddingHorizontal: 20,
      backgroundColor: '#3bf6ff',
      paddingVertical: 20,
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
    logo: {
      width: 200, 
      height: 200, 
      alignSelf: 'center', 
      marginTop: 30, 
      marginBottom: 10
    },
    btnImg: {
      alignItems: 'center',
      marginTop: 10,
      backgroundColor: '#2ADBE5',
      borderColor: '#000',
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    btn: {
      alignItems: 'center',
      marginTop: 30,
      backgroundColor: '#FF5474',
      padding: 20,
      borderRadius: 5,
      borderColor: '#000',
      borderWidth: 1,
      marginBottom: 30,
    },
    btnText: {
      fontFamily: 'Anta-Regular',
      color: '#000',
      fontSize: 22,
    },
  });
