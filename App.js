//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Splash from './src/screens/Splash';
import KakaoLogIn from './src/components/KakaoLogIn';

export default function App() {
  return (
    <View>
         {/*** <Splash styles={ StyleSheet.container } />*/}
      <KakaoLogIn/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
