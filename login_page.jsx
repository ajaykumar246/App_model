import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TextInput } from 'react-native';
import  backgroundImage from './image/ba.jpg';
import { reloadAppAsync } from 'expo';
import React, {useState} from 'react';

export default function login_page() {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
      <Text style={styles.text}>Login</Text>
      <TextInput style={styles.input} placeholder='Username'></TextInput>
      <TextInput style={styles.input} placeholder='Password'></TextInput>
      <Text  style={{color:'saddlebrown',fontSize:25,textDecorationLine:'underline'}}>Register</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%',
    width:'100%',
  },
  background:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    width:'100%',
  },
  text:{
    color:'green',
    fontSize:25,

  },
  input:{
    height:40,
    width:300,
    borderColor:'gray',
    borderwidth:1,
    paddingLeft:8,
    marginBottom:12,
    marginTop:20,
    backgroundColor:'lightgray',
    borderRadius:10,


  },
});