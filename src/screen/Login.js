import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'


import { login } from '../services/students'

const Login = ({navigation}) => {
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");

  const onPressHandler= async (event) => {
    console.log("test");
    const res = await login({
      email,
      password
    }
    );
    console.log("onPress", res);
    navigation.navigate('AppScreen');       
  }
  
  const onPressHander= async (event) => {
    console.log("reussir");
    navigation.navigate('Register')
       
  }
  


  
  return (
    <View style={styles.container}>
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

        
          <TouchableOpacity style={styles.loginBtn} onPress={onPressHandler}>
             <Text style={styles.loginText}>login</Text>
        </TouchableOpacity>
      
        
        
        <TouchableOpacity style={styles.forgot_button} onPress={onPressHander}>
          <Text >Cliquer ici pour creer un compte</Text>
        </TouchableOpacity>

      

      
        

    </View>
       
        
         
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn:
  {
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor:"#FF1493",
  }
})

export default Login
