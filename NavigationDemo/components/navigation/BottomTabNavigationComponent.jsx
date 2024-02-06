import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DashboardScreen from '../../screens/dashboard/DashboardScreen';
import ProductScreen from '../../screens/dashboard/ProductScreen';
import AccountScreen from '../../screens/dashboard/AccountScreen';
import HomeScreen from '../../screens/HomeScreen';
import TopTabNavigationComponet from './TopTabNavigationComponent';


const Tab = createBottomTabNavigator();

const BottomTavNavigationComponent = () => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'TopTab') {
                        iconName = focused
                            ? 'home-outline'
                            : 'home';
                    }
                    else if (route.name === 'Dashboard') {
                        iconName = focused
                            ? 'home-outline'
                            : 'home';
                    } else if (route.name === 'Product') {
                        iconName = focused ? 'list-outline' : 'list';
                    } else if (route.name === 'Account') {
                        iconName = focused ? 'people-outline' : 'people';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                    
                }
                
            })}
        >
            <Tab.Screen name="TopTab" component={TopTabNavigationComponet} 
                options={{title: 'Home'}}
            />
            {/* <Tab.Screen name="Dashboard" component={DashboardScreen} /> */}
            <Tab.Screen name="Product" component={ProductScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />

        </Tab.Navigator>
    );
    
}

export default BottomTavNavigationComponent;