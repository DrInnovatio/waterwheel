import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Splash = () => {
  return (
    <View style={ Styles.splashStyle }>
      <Text>Waterwheel</Text>
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
  

});


export default Splash;