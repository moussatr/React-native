import {
    Text,
    TouchableOpacity,
    View
    
  } from 'react-native';
  

const Home = ({navigation}) =>{

    const onPressHandler=() =>{
        navigation.navigate('Chuck');
    }
    return (
        
        <View View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home page</Text>
        <TouchableOpacity onPress={onPressHandler}>
          <Text style={{ backgroundColor: 'blue'}}>Cliquer ici pour allez sur la page Chuck !</Text>
        </TouchableOpacity>
       
      </View>
    )
};

export default Home;