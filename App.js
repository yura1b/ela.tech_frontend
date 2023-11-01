import { useState } from 'react';
import { StyleSheet} from 'react-native';
import { } from 'react-native-web';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import MainStack from './navigation'


const fonts = () => Font.loadAsync({
  'B-H':require('./assets/fonts/Roboto-Light.ttf')
});

export default function App() {
  const [font, setFont] = useState(false);

  if(font){
  return (
      <MainStack/>
  );
 } else{
    return(
      <AppLoading startAsync = {fonts} 
      onFinish = {() => setFont(true)}
      onError={console.warn}/>
    )
  }
}
