import { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../assets/Colors';

const SearchBar = ({ search, setSearch }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearch = (text) => {
    setSearch(text);
    setIsSearchActive(text !== '');
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon name="search" color={Colors.white} size={20} style={{ paddingLeft: 15, marginRight: 10 }} />
        <TextInput
          inputMode='search'
          style={styles.searchInput}
          placeholder="Procurar fornecedor..."
          placeholderTextColor={Colors.whiteWithOpacity}
          onChangeText={handleSearch}
          value={search}
        />
        {isSearchActive && (
          <TouchableOpacity onPress={() => { setSearch(''); setIsSearchActive(false); }}>
            <Icon name="close" color={Colors.white} size={20}/>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
};

export default SearchBar;

const styles = StyleSheet.create({
  container:{
    flexDirection:'row', 
    alignItems:'center'},
  searchBar: {
    backgroundColor: Colors.blackWithOpacity,
    borderRadius: 10,
    margin: 10,
    fontFamily: 'Kanit-Regular',
    flexDirection: 'row',
    alignItems: 'center', 
    width:'84%' 
  },
  searchInput:{ 
    fontSize: 18, 
    width:'78%', 
    color: Colors.white, 
    fontFamily: 'Kanit-Regular',
  }
});