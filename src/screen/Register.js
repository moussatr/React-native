import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native'
import { register } from '../services/students';


const Register = ({navigation}) => {
  const [ email, setEmail] = useState("");
  const [ email_cfg, setEmail_cfg] = useState("");
  const [ password, setPassword] = useState("");
  const [ password_cfg, setPassword_cfg] = useState("");
  const [ firstname, setFirstname] = useState("");
  const [ lastname, setLastname] = useState("");

  const onPressHandler= async (event) => {
    console.log("test");
    const res = await register({
      email,
      email_cfg,
      password,
      password_cfg,
      firstname,
      lastname
    });
    console.log("onPress", res);

  }
  const onPressHander= async (event) => {
    console.log("reussir");
    navigation.navigate('Login')
       
  }
  
  return (
    <ScrollView >
    <View style={styles.container}>
      
      <Text>Register</Text>
      <View style={styles.inputView}>
      <TextInput 
          onChangeText={(text) => setEmail(text)}
          value={email} 
          name="email"
          placeholder="Votre adresse email">
        </TextInput>

      </View>
      
      <View style={styles.inputView}>
        
      <TextInput 
          onChangeText={(text) => setEmail_cfg(text)}
          value={email_cfg} 
          name="email_cfg"
          placeholder="Confirmer votre adresse email">
        </TextInput>
      </View>
      
      <View style={styles.inputView}>
      <TextInput 
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)} 
          value={password} 
          name="password"
          placeholder="Votre mot de passe">
        </TextInput>
      </View>

      <View style={styles.inputView}>
      <TextInput 
          secureTextEntry={true}
          onChangeText={(text) => setPassword_cfg(text)} 
          value={password_cfg} 
          name="password_cfg"
          placeholder="Confirmer votre mot de passe">
        </TextInput>
      </View>

      <View style={styles.inputView}>
      <TextInput 
          onChangeText={(text) => setFirstname(text)} 
          value={firstname} 
          name="firstname"
          placeholder="Entrez votre nom">
        </TextInput>
      </View> 
        
      <View style={styles.inputView}>
      <TextInput 
          onChangeText={(text) => setLastname(text)} 
          value={lastname} 
          name="lastname"
          placeholder="Entrez votre prénom">
        </TextInput>
      </View>  
        
        <TouchableOpacity style={styles.loginBtn} onPress={onPressHandler}>
             <Text >Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgot_button} onPress={onPressHander}>
          <Text >Vous avez déjà un compte Cliquer ici pour Vous connecter</Text>
        </TouchableOpacity>
      
      
    </View>
    </ScrollView>
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


export default Register

