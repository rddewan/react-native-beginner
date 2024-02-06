import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScrren';
import ProfileScreen from './screens/ProfileScreen';
import BottomTavNavigationComponent from './components/navigation/BottomTabNavigationComponent';
import DrawerNavigatorComponent from './components/navigation/DrawerNavigationComponent';
import TopTabNavigationComponent from './components/navigation/TopTabNavigationComponent';



export default function App() {
  return (
    <NavigationContainer>
      {/* <AppNavigation /> */}
      {/* <BottomTavNavigationComponent /> */}
      <DrawerNavigatorComponent />
      {/* <TopTabNavigationComponent /> */}
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
