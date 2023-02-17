import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Home'

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default NavigationScreen;