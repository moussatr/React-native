import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from './Profile'
import ChuckScreen from './Chuck'

const Stack = createNativeStackNavigator();

const NavigationScreen = ( ) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="profile" component={ProfileScreen}></Stack.Screen>
            <Stack.Screen name="Chuck" component={ChuckScreen} />
        </Stack.Navigator>
    );
};

export default NavigationScreen;