import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Text, TouchableOpacity, Image, ToastAndroid, View } from 'react-native';
import  CustomTextInput  from '../components/CustomTextInput';
import CategoryPicker from '../components/CategoryPicker';
import ImagePicker from '../components/ImagePicker';
import { styles } from './stylesRF';


const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [registrationData, setRegistrationData] = useState([]);
  const navigation = useNavigation();

  const showToast = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  }
  const [key, setKey] = useState(Math.random());

  const handleCadastrar = () => {
    if (name !== '' && address !== '' && contact !== '' && category !=='' && image !== '') {
      const novoCadastro = { name, address, contact, category, image };
      const novosregistrationData = [...registrationData, novoCadastro];
      setRegistrationData(novosregistrationData);
      showToast('Cadastro realizado com sucesso!');
      navigation.navigate('fornecedores', { registrationData: novosregistrationData });
      setName('');
      setAddress('');
      setContact('');
      setKey(Math.random());
      setImage('');
      
    } else {
      showToast('Preencha todos os campos');
    }
  };

  return (
    <View style={styles.container}
      >
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <CustomTextInput placeholder="Digite o nome" onChangeText={setName} value={name}/>
      <CustomTextInput placeholder="Digite o endereço" onChangeText={setAddress} value={address} />
      <CustomTextInput placeholder="Digite o contato" onChangeText={setContact} value={contact} inputMode='tel' maxLength={13} />
      <CategoryPicker key={key} selectedCategory={category} onValueChange={setCategory} />
      <ImagePicker image={image} setImage={setImage} styles={styles} />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          handleCadastrar();
        }}
        ><Text style={styles.btnText}>Cadastrar</Text></TouchableOpacity>
    </View>
  );
};

export default RegistrationForm;

