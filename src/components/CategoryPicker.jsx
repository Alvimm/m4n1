import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from "react";
import Categories from '../assets/Categories';

const CategoryPicker = ({ selectedCategory, onValueChange }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(Categories.map((category) => ({ label: category.text, value: category.text })));
  return (
    <DropDownPicker
      placeholder='Selecione uma categoria'
      placeholderStyle={{ color: '#0005', fontFamily: 'Anta-Regular' }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onSelectItem={item => onValueChange(item.value)}
      containerStyle={{ marginBottom: 30}}
      labelStyle={{fontFamily: 'Anta-Regular'}}
      style={{ backgroundColor: '#fa4b77', borderColor: '#0008'}}
      arrowIconStyle={{ tintColor: '#0005'}}
      tickIconStyle={{tintColor: '#0005'}}
      listParentLabelStyle={{fontFamily: 'Anta-Regular', color: '#0008'}}
      listParentContainerStyle={{backgroundColor: '#fa4b77'}}
      dropDownContainerStyle={{borderColor: '#0008'}}
    />
  );
};

export default CategoryPicker;



