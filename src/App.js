import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screen/Home';
import ChuckScreen from './screen/Chuck';
const Stack = createNativeStackNavigator();

const App = () =>{
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Chuck" component={ChuckScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
};

export default App;