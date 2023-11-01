/*import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View} from 'react-native';
import { } from 'react-native-web';
import {gStyle} from './style/style'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';

const fonts = () => Font.loadAsync({
  'B-H':require('./assets/fonts/Bungee_Hairline,Montserrat.ttf')
});

export default function App() {
  const [font, setFont] = useState(false);

  if(font){
  return (
      <SafeAreaView style={gStyle.main}>
        <View style ={styles.main_conteiner}>
          <View style={styles.container_with_logo}>
            <Text style={styles.text}>ela.tech</Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }else{
    return(
      <AppLoading startAsync = {fonts} 
      onFinish = {() => setFont(true)}
      onError={console.warn}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  text: {
    color:'white',
    fontSize: 42,
    fontFamily:'B-H'
  

  },
  main_conteiner:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',

    

  },
  container_with_logo:{
    position:'absolute',
    
    
  }
});
*/
