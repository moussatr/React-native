import React from 'react'
import { postClasse } from '../../services/classes';

const AddStudent = () => {
    const [classes, setClasses] = useState([]);
    
    useEffect(() => {
       
        const getData = async () => {
            const res = await postClasse('http://172.23.144.1:4500/classes');
            console.log("test  test test ");
            console.log(res);
            setClasses(res);
        }

        getData();
    }, []);


  return (
    <View>
        <View >
        <Text>Login</Text>
       </View>
        
        <View View style={styles.inputView}>
          <TextInput 
          onChangeText={(text) => setEmail(text)}
          value={email} 
          name="email"
          placeholder="Votre adresse email">
        </TextInput>
        </View>

        <View View style={styles.inputView}>
        <TextInput 
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)} 
          value={password} 
          name="password"
          placeholder="Votre mot de passe">
        </TextInput>
        </View>
    </View>
  )
}

export default AddStudent
