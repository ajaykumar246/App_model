import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import backgroundImage from './assets/ba.jpg';

export default function OTP() {
  const [textColor, setTextColor] = useState('black'); // Initial color

  const handlePress = () => {
    setTextColor(prevColor => (prevColor === 'black' ? 'white' : 'black'));
  };
//The content to show in the screen
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <Text style={styles.title}>OTP Verification</Text>
        <TextInput style={styles.input} placeholder='Enter OTP' />
        <TouchableOpacity onPress={handlePress}>
          <Text style={[styles.submitText, { color: textColor }]}>Submit</Text>
        </TouchableOpacity>
      </ImageBackground>
      <StatusBar style='auto' /> 
    </View>
  );
}
//Adding styles to the page =>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:0,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1, // Corrected property name
    paddingLeft: 10,
    marginBottom: 20,
    marginTop: '8%',
    backgroundColor: 'lightgray',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  submitText: {
    fontSize: 25,
    textDecorationLine: 'underline',
  },
});