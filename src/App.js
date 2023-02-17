/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import React from 'react';
import HomeScreen from './screen/Home/Home';
import ChuckScreen from './screen/compte/Chuck';
import LoginScreen from './screen/Login';
import RegisterScreen from './screen/Register';
import AppScreen from './screen/AppScreen';





function App() {

    

    return (
        <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    <Stack.Screen name="AppScreen" component={AppScreen} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Chuck" component={ChuckScreen} />
                </Stack.Navigator>
            </NavigationContainer>
     
        
    );
};

export default App;