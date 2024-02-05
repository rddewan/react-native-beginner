import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DashboardScreen from '../../screens/dashboard/DashboardScreen';
import ProductScreen from '../../screens/dashboard/ProductScreen';
import AccountScreen from '../../screens/dashboard/AccountScreen';


const Tab = createBottomTabNavigator();

const BottomTavNavigationComponent = () => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Dashboard') {
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
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            <Tab.Screen name="Product" component={ProductScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />

        </Tab.Navigator>
    );
    
}

export default BottomTavNavigationComponent;