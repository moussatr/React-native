import {
    Text, View
    
  } from 'react-native';
import React, { useState, useEffect } from 'react'

const Chuck = () => {
  const [fact, setFact] = useState({})
  getChuckFact = async = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random');

    console.log(res);
    const chuckFact = await res.json();
    console.log(chuckFact);
    setFact(chuckFact);
  }

  useEffect(() =>{
    getChuckFact();
  }, [] )
  return (
    <View>
      <Text>Chuck Page</Text>
      <Text>{fact.created_at}</Text>
    </View>
    
  )
}

export default Chuck

