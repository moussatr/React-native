import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'

import {getMeApi} from '../../services/students'

const Profile = ({navigation}) => {
    const [me, setMe] = useState([]);
    useEffect(() => {
        const getMe = async () => {
            console.log('getMe')
            const res = await getMeApi('http://192.168.208.79:4500/students')
            console.log(res);
            setMe(res);
        }

        getMe()
    }, [])
    
 
    return (
        <View>
            <Text>Profile screen</Text>

            <>
                <View>
                    <Text>Vos cours</Text>
                    <View>
                {me.map(student => <Text key={student._id}> {student.firstname} </Text>)}
        </View>
                </View>
            </>

        </View>
    )
}

export default Profile