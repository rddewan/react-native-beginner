import { createDrawerNavigator } from "@react-navigation/drawer"; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import AboutUs from "../../screens/drawer/AboutUs";
import ContactUs from "../../screens/drawer/ContactUs";
import StackNavigationComponent from "./StackNavigationComponent";

const Drawer = createDrawerNavigator();

const DrawerNavigatorComponent = () => {
    return (
        <Drawer.Navigator
        screenOptions={({ route }) => ({
            drawerIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'StackNavigation') {
                    iconName = focused
                        ? 'home'
                        : 'home';
                }
                else if (route.name === 'AboutUs') {
                    iconName = focused
                        ? 'location-history'
                        : 'location-on';
                } else if (route.name === 'ContactUs') {
                    iconName = focused ? 'email' : 'attach-email';
                } 

                return <MaterialIcons name={iconName} size={size} color={color} />                
            }
            
        })}
        >
        <Drawer.Screen name="StackNavigation" component={StackNavigationComponent} 
            options={{drawerLabel: 'Home', headerTitle: ''}}
        />
        <Drawer.Screen name="AboutUs" component={AboutUs} />
        <Drawer.Screen name="ContactUs" component={ContactUs} />
        </Drawer.Navigator>
    )
    
}

export default DrawerNavigatorComponent;

