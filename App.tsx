import { StyleSheet, View, StatusBar } from 'react-native';
import BottomTabs from './Navigations/BottomTabs';
import { NavigationContainer } from '@react-navigation/native';


function App(): React.JSX.Element {
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
      flex: 1
    }
  }
);

export default App;
