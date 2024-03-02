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
      <Icon name="search" color={'#0D6368'} size={20} style={{paddingLeft:15, marginRight:10}}/>
      <TextInput
        inputMode='search'
        style={{fontSize:15, width: '82%', color: '#000', fontFamily: 'Anta-Regular'}}
        placeholder="Procurar fornecedor..."
        placeholderTextColor='#0D6368'
        onChangeText={handleSearch}
        value={search}
      />
      {isSearchActive && (
        <TouchableOpacity onPress={() => {setSearch(''); setIsSearchActive(false);}}>
          <Icon name="close" color={'#0D6368'} size={20} />
        </TouchableOpacity>
      )}
      
    </View>
  )
};

export default SearchBar;

const styles = StyleSheet.create({
  searchInput:{
    backgroundColor: '#3CF3FB',
    borderRadius: 10,
    margin: 10,
    fontFamily: 'Anta-Regular',
    flexDirection: 'row',
    alignItems: 'center'
  }
});