import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
import SuppliersList from '../screens/SuppliersList';
import RegistrationForm from '../screens/RegistrationForm';
import Colors from '../assets/Colors';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarHideOnKeyboard: true,
      headerShown: false,
      tabBarStyle: {
        height: 90,
        paddingBottom: 15,
        paddingTop: 15,
        backgroundColor: Colors.secondary,
        borderColor: Colors.secondary,
        marginBottom: 10,
        marginHorizontal: 50,
        borderRadius: 50
      }
    }}>
      <Tab.Screen name="home" component={RegistrationForm} options={{
        tabBarLabel: ({ focused }) => (
          <Text style={{
            fontFamily: 'Kanit-Medium',
            fontSize: 15,
            color: focused ? Colors.black : Colors.blackWithMoreOpacity
          }}>home</Text>
        ),
        tabBarIcon: ({ focused, size }) => (
          <Icon name="home" color={focused ? Colors.black : Colors.blackWithMoreOpacity} size={30} />
        ),
      }} />
      <Tab.Screen name="fornecedores" component={SuppliersList} options={{
        tabBarLabel: ({ focused }) => (
          <Text style={{ fontFamily: 'Kanit-Medium', fontSize: 15, color: focused ? Colors.black : Colors.blackWithMoreOpacity }}>fornecedores</Text>
        ),
        tabBarIcon: ({ focused, size }) => (
          <Icon name="list" color={focused ? Colors.black : Colors.blackWithMoreOpacity} size={30} />
        ),
      }} />
    </Tab.Navigator>
  );
}