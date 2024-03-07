import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
import ListaFornecedores from '../screens/ListaFornecedores';
import Cadastro from '../screens/Cadastro';

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
        backgroundColor: '#FF5474',
        borderTopColor: '#000'
      }
    }}>
      <Tab.Screen name="home" component={Cadastro} options={{
        tabBarLabel: ({ focused }) => (
          <Text style={{
            fontFamily: 'Anta-Regular',
            fontSize: 14,
            color: focused ? '#000' : '#0004'
          }}>home</Text>
        ),
        tabBarIcon: ({ focused, size }) => (
          <Icon name="home" color={focused ? '#000' : '#0004'} size={size} />
        ),
      }} />
      <Tab.Screen name="fornecedores" component={ListaFornecedores} options={{
        tabBarLabel: ({ focused }) => (
          <Text style={{ fontFamily: 'Anta-Regular', fontSize: 14, color: focused ? '#000' : '#0004' }}>fornecedores</Text>
        ),
        tabBarIcon: ({ focused, size }) => (
          <Icon name="list" color={focused ? '#000' : '#0004'} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}