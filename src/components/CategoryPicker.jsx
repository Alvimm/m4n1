import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from "react";
import Categories from '../assets/Categories';
import Colors from '../assets/Colors';

const CategoryPicker = ({ selectedCategory, onValueChange }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(Categories.map((category) => ({ label: category.text, value: category.text })));
  return (
    <DropDownPicker
      placeholder='Selecione uma categoria'
      placeholderStyle={{ color: Colors.blackWithOpacity, fontFamily: 'Kanit-Regular', fontSize:20 }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onSelectItem={item => onValueChange(item.value)}
      containerStyle={{ marginBottom: 30}}
      labelStyle={{fontFamily: 'Kanit-Regular', fontSize:20}}
      style={{ backgroundColor: Colors.primary, borderColor: Colors.blackWithOpacity}}
      arrowIconStyle={{ tintColor: Colors.blackWithMoreOpacity}}
      tickIconStyle={{tintColor: Colors.blackWithMoreOpacity}}
      listParentLabelStyle={{fontFamily: 'Kanit-Regular', color: Colors.blackWithOpacity, fontSize:20}}
      listParentContainerStyle={{backgroundColor: Colors.primary}}
      dropDownContainerStyle={{borderColor: Colors.blackWithOpacity}}
    />
  );
};

export default CategoryPicker;



