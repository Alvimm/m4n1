import { StyleSheet, TextInput } from "react-native";
import Colors from "../assets/Colors";

function CustomTextInput({ placeholder, onChangeText, value, inputMode = 'text', maxLength }) {
  return (
    <TextInput
      inputMode={inputMode}
      maxLength={maxLength}
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor= {Colors.blackWithMoreOpacity}
      onChangeText={onChangeText}
      value={value}
      cursorColor={Colors.blackWithOpacity}
    />
  );
}

const styles = StyleSheet.create(
  {
    input: {
      fontFamily: 'Anta-Regular',
      height: 40,
      marginBottom: 30,
      color: Colors.black,
      borderBottomColor: Colors.blackWithOpacity,
      borderBottomWidth: 1,
    },});
    
export default CustomTextInput;