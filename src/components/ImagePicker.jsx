import { Alert, TouchableOpacity, Text, View, Image } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

const ImagePicker = ({ imagem, setImagem, styles }) => {
  const options = {
    storageOptions: {
      path: 'image',
    },
  };

  const handlePress = () => {
    Alert.alert(
      'Escolha uma opção',
      'Deseja abrir a câmera ou a galeria de imagens?',
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
          text: 'Abrir galeria de imagens',
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

  return (
    <TouchableOpacity style={styles.btnImg} onPress={handlePress}>
      <Text style={styles.btnText}>Escolha sua foto</Text>
      {imagem && (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={{ uri: imagem }}
            style={styles.selectedImg}
          />
          <Icon name="checkmark-circle" color={'green'} size={20} />
        </View>
      )}
    </TouchableOpacity>
  );
};

  export default ImagePicker;