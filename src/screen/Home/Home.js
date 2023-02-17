import { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import { getLessons } from '../../services/lessons';

import { login } from '../../services/students';

const Home = ({navigation}) => {
    // const [sessions, setSessions] = useState([]);
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        // const getData = async () => {
        //     const res = await getSessions();
        //     console.log(res);
        //     setSessions(res);
        // }

        // getData();
        const getData = async () => {
            const res = await getLessons('http://192.168.208.79:4500/lessons');
            console.log("test  test test ");
            console.log(res);
            setLessons(res);
        }

        getData();
    }, []);

    return <View>
        <Text>Liste des cours</Text>
        <View>
         
        <View>
                {lessons.map(lesson => <Text key={lesson._id}> {lesson.label} </Text>)}
        </View>
               
        </View>
    </View>
}

export default Home;