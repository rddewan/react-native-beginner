import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants';


import ChatScreen from '../../screens/toptabs/ChatScreen';
import CallScreen from '../../screens/toptabs/CallScreen';
import GroupScreen from '../../screens/toptabs/GroupScreen';
import HomeScreen from '../../screens/HomeScreen';


const ToTap = createMaterialTopTabNavigator();

const TopTabNavigationComponet = () => {
    return (
        <ToTap.Navigator       
            screenOptions={({ route }) => ({      
                tabBarStyle: {
                    //marginTop: Constants.statusBarHeight,
                },  
                tabBarLabelStyle: {
                    textTransform: 'capitalize'
                },    
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home-outline'
                            : 'home';
                    }
                    else if (route.name === 'Chat') {
                        iconName = focused
                            ? 'home-outline'
                            : 'home';
                    } else if (route.name === 'Call') {
                        iconName = focused ? 'list-outline' : 'list';
                    } else if (route.name === 'Group') {
                        iconName = focused ? 'people-outline' : 'people';
                    }

                    return <Ionicons name={iconName} size={24} color={color} />
                    
                }
                
            })}
        >
            <ToTap.Screen name="Home" component={HomeScreen} />
            <ToTap.Screen name="Chat" component={ChatScreen} />
            <ToTap.Screen name="Call" component={CallScreen} />
            <ToTap.Screen name="Group" component={GroupScreen} />
        </ToTap.Navigator>
    )
}

export default TopTabNavigationComponet;