import { StyleSheet, View, StatusBar } from 'react-native';
import BottomTabs from './Navigations/BottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import { useKeepAwake } from '@sayem314/react-native-keep-awake';


function App(): React.JSX.Element {
  useKeepAwake();
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
      />
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      fontFamily: "Anta-Regular"
    }
  }
);

export default App;
