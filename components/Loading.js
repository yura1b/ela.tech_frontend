import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View} from 'react-native';
import { } from 'react-native-web';
import {gStyle} from '../style/style'


export default function Loading() {
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
}

const styles = StyleSheet.create({
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
