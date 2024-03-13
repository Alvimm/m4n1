import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
import ListaFornecedores from '../screens/ListaFornecedores';
import Cadastro from '../screens/Cadastro';
import Colors from '../assets/Colors';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarHideOnKeyboard: true,
      headerShown: false,
      tabBarStyle: {
        height: 60,
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: Colors.secondary,
        borderTopColor: Colors.blackWithMoreOpacity
      }
    }}>
      <Tab.Screen name="home" component={Cadastro} options={{
        tabBarLabel: ({ focused }) => (
          <Text style={{
            fontFamily: 'Anta-Regular',
            fontSize: 14,
            color: focused ? Colors.black : Colors.blackWithMoreOpacity
          }}>home</Text>
        ),
        tabBarIcon: ({ focused, size }) => (
          <Icon name="home" color={focused ? Colors.black : Colors.blackWithMoreOpacity} size={size} />
        ),
      }} />
      <Tab.Screen name="fornecedores" component={ListaFornecedores} options={{
        tabBarLabel: ({ focused }) => (
          <Text style={{ fontFamily: 'Anta-Regular', fontSize: 14, color: focused ? Colors.black : Colors.blackWithMoreOpacity }}>fornecedores</Text>
        ),
        tabBarIcon: ({ focused, size }) => (
          <Icon name="list" color={focused ? Colors.black : Colors.blackWithMoreOpacity} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}