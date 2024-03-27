import { StyleSheet } from "react-native";
import Colors from '../assets/Colors';

export const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: Colors.primary,
      paddingVertical: 50,
    },
    logo: {
      width: 150,
      height: 150,
      alignSelf: 'center',
      marginTop: 50,
      marginBottom: 10
    },
    btnImg: {
      alignItems: 'center',
      marginTop: 10,
      backgroundColor: Colors.tertiary,
      borderColor: Colors.black,
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    btn: {
      alignItems: 'center',
      marginTop: 30,
      backgroundColor: Colors.secondary,
      padding: 20,
      borderRadius: 5,
      borderColor: Colors.black,
      borderWidth: 1,
      marginBottom: 60,
    },
    btnText: {
      fontFamily: 'Kanit-Medium',
      color: Colors.black,
      fontSize: 24,
    },
    selectedImg:{
      width: 30,
      height: 30,
      borderColor: 'green',
      borderWidth: 2,
      borderRadius: 5,
      marginLeft: 10,
      marginRight: 2
    }
  });
