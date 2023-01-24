

import React from 'react';

import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { useState, useEffect } from 'react';
import {style} from './styles/global';


const App = () => {
  useEffect(() =>
  console.log('useEffect !')
  );

  const [count, SetCount] =useState(0);
  const onPressHandler = () =>{
   SetCount(count +1) ;
    console.log('cliquer sur le bouton !', count);
  }

  return (
      
      <>
   
      <View>
       <Text style={style.Text}>Hello World !</Text>
      </View>
      <View>
        <TouchableOpacity onPress={onPressHandler}>
          <Text>Cliquer ici</Text>
        </TouchableOpacity>
         
      </View>
      <View>
        <Text>Voici incémentation : {count}</Text>
      </View>
  </>
   
  );
};


export default App;
