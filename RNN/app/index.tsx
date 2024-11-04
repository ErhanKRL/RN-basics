
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/app/screens/HomeScreen';
import AboutScreen from '@/app/screens/AboutScreen';
import { Pressable, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   
      <Stack.Navigator initialRouteName='Home' screenOptions={
        {
          headerStyle: {
            backgroundColor: '#6a51ae',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Pressable 
              onPress={() => alert('Menu is pressed!')}
            >
              <Text style={{color: 'white'}}>Menu</Text>
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: '#e8e4f3',
          }
        }
      }>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'Welcome to Home',
        }}/> 
        <Stack.Screen name="About" component={AboutScreen} initialParams={{name: 'Guest'}} options={({ route }) => ({ title: route.params?.name })} />
      </Stack.Navigator>
   
  );
}