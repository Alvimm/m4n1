import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, ToastAndroid, ScrollView, LogBox } from 'react-native';
import  CustomTextInput  from '../components/CustomTextInput';
import CategoryPicker from '../components/CategoryPicker';
import ImagePicker from '../components/ImagePicker';
import Colors from '../assets/Colors';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

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
  const [key, setKey] = useState(Math.random());

  const handleCadastrar = () => {
    if (nome !== '' && endereco !== '' && contato !== '' && categoria !=='' && imagem !== '') {
      const novoCadastro = { nome, endereco, contato, categoria, imagem };
      const novosDadosCadastro = [...dadosCadastro, novoCadastro];
      setDadosCadastro(novosDadosCadastro);
      navigation.navigate('fornecedores', { dadosCadastro: novosDadosCadastro });
      setNome('');
      setEndereco('');
      setContato('');
      setKey(Math.random());
      setImagem('');
      
    } else {
      showToast();
    }
  };

  return (
    <ScrollView style={styles.container}
      >
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <CustomTextInput placeholder="Digite o nome" onChangeText={setNome} value={nome}/>
      <CustomTextInput placeholder="Digite o endereço" onChangeText={setEndereco} value={endereco} />
      <CustomTextInput placeholder="Digite o contato" onChangeText={setContato} value={contato} inputMode='tel' maxLength={13} />
      <CategoryPicker key={key} selectedCategory={categoria} onValueChange={setCategoria} />
      <ImagePicker imagem={imagem} setImagem={setImagem} styles={styles} />

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
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: Colors.primary,
      paddingVertical: 50,
    },
    text: {
      fontFamily: 'Anta-Regular',
      fontSize: 20,
      color: '#000',
    },
    logo: {
      width: 150,
      height: 150,
      alignSelf: 'center',
      marginTop: 50,
      marginBottom: 10
    },
    btnImg: {
      alignItems: 'center',
      marginTop: 10,
      backgroundColor: Colors.tertiary,
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
      backgroundColor: Colors.secondary,
      padding: 20,
      borderRadius: 5,
      borderColor: '#000',
      borderWidth: 1,
      marginBottom: 60,
    },
    btnText: {
      fontFamily: 'Anta-Regular',
      color: '#000',
      fontSize: 22,
    },
    selectedImg:{
      width: 30,
      height: 30,
      borderColor: 'green',
      borderWidth: 2,
      borderRadius: 5,
      marginLeft: 10,
      marginRight: 2
    }
  });
