import { StyleSheet, TextInput } from "react-native";

export function CustomTextInput({ placeholder, onChangeText, value, inputMode = 'text', maxLength }) {
  return (
    <TextInput
      inputMode={inputMode}
      maxLength={maxLength}
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#0D6368"
      onChangeText={onChangeText}
      value={value}
      cursorColor="#0D6368"
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
      borderBottomColor: '#0D6368',
      borderBottomWidth: 1,
    },});