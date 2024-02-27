// import { useState } from 'react';
// import { StyleSheet, TextInput, View } from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons';

// const SearchBar = () => {
//   const [search, setSearch] = useState('');
//   return (
//     <View  style={styles.searchInput}>
//       <Icon name="search" color={'#fff'} size={20} style={{paddingLeft:15, marginRight:10}}/>
//       <TextInput
//         inputMode='search'
//         style={{fontSize:15, width: '88%'}}
//         placeholder="Procurar fornecedor..."
//         placeholderTextColor="gray"
//         onChangeText={(text) => setSearch(text)}
//         value={search}
//       />
      
//     </View>
//   )
// }

// export default SearchBar

// const styles = StyleSheet.create({
//   searchInput:{
//     backgroundColor: '#1e1e1e',
//     borderRadius: 10,
//     margin: 10,
//     fontFamily: 'Anta-Regular',
//     flexDirection: 'row',
//     alignItems: 'center'
//   }
// })
import { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = ({ search, setSearch }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearch = (text) => {
    setSearch(text);
    setIsSearchActive(text !== '');
  }

  return (
    <View style={styles.searchInput}>
      <Icon name="search" color={'#fff'} size={20} style={{paddingLeft:15, marginRight:10}}/>
      <TextInput
        inputMode='search'
        style={{fontSize:15, width: '82%'}}
        placeholder="Procurar fornecedor..."
        placeholderTextColor="gray"
        onChangeText={handleSearch}
        value={search}
      />
      {isSearchActive && (
        <TouchableOpacity onPress={() => {setSearch(''); setIsSearchActive(false);}}>
          <Icon name="close" color={'#fff'} size={20} />
        </TouchableOpacity>
      )}
      
    </View>
  )
};

export default SearchBar;

const styles = StyleSheet.create({
  searchInput:{
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    margin: 10,
    fontFamily: 'Anta-Regular',
    flexDirection: 'row',
    alignItems: 'center'
  }
});