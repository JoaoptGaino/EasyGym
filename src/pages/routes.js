import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home/index';
import Muscles from './Muscles/index';
import Back from './Back/index';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none"
                screenOptions={{ cardStyle: { backgroundColor: '#7a0000' } }}>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Muscles" component={Muscles}/>
                <AppStack.Screen name="Back" component={Back}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
export default Routes;