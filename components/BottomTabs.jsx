import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cadastro from '../screens/Cadastro';
import ListaFornecedores from '../screens/ListaFornecedores';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: { height: 60, paddingBottom: 5, paddingTop: 5, backgroundColor: '#121212', borderTopColor: '#1e1e1e'},
      tabBarLabelStyle: {fontFamily: 'Anta-Regular', fontSize: 14}
    }}>
      <Tab.Screen name="home" component={Cadastro} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="fornecedores" component={ListaFornecedores} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="list" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}