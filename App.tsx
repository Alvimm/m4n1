import { StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/components/BottomTabs';
import Colors from './src/assets/Colors';


function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.primary}
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
