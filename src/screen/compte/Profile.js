import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'

import {getMeApi} from '../../services/students'

const Profile = ({navigation}) => {
    const [me, setMe] = useState([]);
    useEffect(() => {
        const getMe = async () => {
            console.log('getMe')
            const res = await getMeApi('http://172.23.144.1:4500/students')
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
                        
                    <View>
                        {me.map(student => <Text key={student._id}> {student._id} </Text>)}
                    </View>
                </View>
            </>

        </View>
    )
}

export default Profile