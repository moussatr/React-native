import { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { getLessons } from '../../services/lessons';
import { getClasse } from '../../services/classes';

import { login } from '../../services/students';

const Home = ({navigation}) => {
  
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

    
  const onPressHander= async (event) => {
    
  
    navigation.navigate('Student');
    
       
  }

    return <View>
        <Text>Liste des cours</Text>
        <View>
         
        <View>
                {classes.map(classe => <Text key={classe._id}>
                    <TouchableOpacity  onPress={onPressHander}>
                      <Text > {classe.name} </Text>
                     </TouchableOpacity>

                    
                     </Text>)}
        </View>
               
        </View>
    </View>
}

export default Home;