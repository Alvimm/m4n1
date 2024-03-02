import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cadastro from '../screens/Cadastro';
import ListaFornecedores from '../screens/ListaFornecedores';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: { height: 60, paddingBottom: 5, paddingTop: 5, backgroundColor: '#3CF3FB', borderTopColor: '#0D6368'}
    }}>
      <Tab.Screen name="home" component={Cadastro} options={{
         tabBarLabel: ({ focused }) => (
          <Text style={{fontFamily: 'Anta-Regular', fontSize: 14, color: focused ? '#FF5474' : '#B9B6B7'}}>home</Text>
        ),
        tabBarIcon: ({ focused, size }) => (
          <Icon name="home" color={focused ? '#FF5474' : '#B9B6B7'} size={size} />
        ),
      }} />
      <Tab.Screen name="fornecedores" component={ListaFornecedores} options={{
                tabBarLabel: ({ focused }) => (
                  <Text style={{fontFamily: 'Anta-Regular', fontSize: 14, color: focused ? '#FF5474' : '#B9B6B7'}}>fornecedores</Text>
                ),
        tabBarIcon: ({ focused, size }) => (
          <Icon name="list" color={focused ? '#FF5474' : '#B9B6B7'} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}