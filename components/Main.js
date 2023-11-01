import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Button} from 'react-native';


export default function Main( {navigation} ) {
    const loadScene = () => {
        navigation.navigate('FindPage');
    }

  return (
      <SafeAreaView>
        <View >
            <Text >Main page</Text>
            <Button title = 'FindPage' onPress={loadScene}/>
        </View>
        
        <StatusBar style="auto" />
      </SafeAreaView>
    );
}
