import { StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useKeepAwake } from '@sayem314/react-native-keep-awake';
import BottomTabs from './src/components/BottomTabs';


function App(): React.JSX.Element {
  useKeepAwake();
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#fa4b77"
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
    }
  }
);

export default App;
