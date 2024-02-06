import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import SettingScreen from '../../screens/SettingScrren';
import ProfileScreen from '../../screens/ProfileScreen';
import BottomTavNavigationComponent from './BottomTabNavigationComponent';

const Stack  = createStackNavigator();

function StackNavigationComponent() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTab" component={BottomTavNavigationComponent} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} initialParams={{id: 10, name: 'Richard'}}/>
    </Stack.Navigator>
    
  );
}

export default StackNavigationComponent;
