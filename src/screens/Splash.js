import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Splash = () => {

  const [showText, setShowText] = useState(true);

  useEffect(() => {
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setShowText((showText) => !showText);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={ Styles.splashStyle }>
      
      <Text style={ Styles.first }>물레방아</Text>
      <Text style={ Styles.second }>사랑이 증거가 될때</Text>
      <Text style={ [Styles.loading, { display: showText ? 'none' : 'flex' }] }>로딩중...</Text>
      
    </View>
  
  )
};

const Styles = StyleSheet.create({
  splashStyle: {
    width: '100%',
    height: '100%',
    fontSize: 40,
    backgroundColor: '#F9F9C5',
    marginTop: 30
  },
  first: {
    fontSize: 55,
    textAlign: 'center',
    marginTop: 200,
    backgroundColor: 'green'
    
  },
  second: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 300,
    backgroundColor: 'pink'
  },
  loading: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    backgroundColor: '#FAD9A1'
  }
  

});


export default Splash;