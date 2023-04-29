import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { getClasse, getClasseById } from '../../services/classes';

const student = ({navigation}) => {
    const [classes, setClasses] = useState([]);
    
    useEffect(() => {
       
        const getData = async () => {
            const res = await getClasse('http://172.23.144.1:4500/classes');
            console.log("test  test test ");
            console.log(res);
            setClasses(res);
        }

        getData();
    }, []);


  return (
    <View>
      <Text>La list des studiants inscrits</Text>
      <Text> {classes.map(classe => <Text key={classe._id}>
                    <TouchableOpacity  >
                      <Text > {classe.students} </Text>
                     </TouchableOpacity>

                    
                     </Text>)}</Text>
    </View>
  )
}

export default student

