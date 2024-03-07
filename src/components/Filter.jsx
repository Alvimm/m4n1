import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const Filter = () => {
  return (
    <View style={{position: 'absolute', right:15}}>
        <TouchableOpacity onPress={() => { console.log('clicked') }}>
          <Icon name="filter" color={'#000'} size={30}  />
        </TouchableOpacity>

      </View>
  )
}

export default Filter

const styles = StyleSheet.create({})
