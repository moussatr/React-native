import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Home'
import StudentScreen from './Student'

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Student" component={StudentScreen} />
        </Stack.Navigator>
    );
};

export default NavigationScreen;