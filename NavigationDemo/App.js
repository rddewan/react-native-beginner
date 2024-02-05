import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScrren';
import ProfileScreen from './screens/ProfileScreen';
import BottomTavNavigationComponent from './components/navigation/BottomTabNavigationComponent';
import DrawerNavigatorComponent from './components/navigation/DrawerNavigationComponent';


const Stack  = createStackNavigator();

function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} initialParams={{id: 10, name: 'Richard'}}/>
    </Stack.Navigator>
    
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <AppNavigation /> */}
      {/* <BottomTavNavigationComponent /> */}
      <DrawerNavigatorComponent />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
