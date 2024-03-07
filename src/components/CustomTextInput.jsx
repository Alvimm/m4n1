import { StyleSheet, TextInput } from "react-native";

function CustomTextInput({ placeholder, onChangeText, value, inputMode = 'text', maxLength }) {
  return (
    <TextInput
      inputMode={inputMode}
      maxLength={maxLength}
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#0005"
      onChangeText={onChangeText}
      value={value}
      cursorColor="#0008"
    />
  );
}

const styles = StyleSheet.create(
  {
    input: {
      fontFamily: 'Anta-Regular',
      height: 40,
      marginBottom: 30,
      color: '#000',
      borderBottomColor: '#0008',
      borderBottomWidth: 1,
    },});
    
export default CustomTextInput;