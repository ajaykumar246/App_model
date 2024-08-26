import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, ImageBackground, TextInput, Alert } from 'react-native';
import backgroundImage from './assets/ba.jpg';
export default function App() {
  const [textColor, setTextColor] = useState('black'); // Initial color
  const[username, setUsername] = useState('');
  const[selectgender, setSelectGender] = useState(null);
  const[phonenumber, setPhonenumber] = useState('');
  const[address, setAddress] = useState('');
  const[district, setDistrict] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handlePress = () => {
    setTextColor(prevColor => (prevColor === 'black' ? 'white' : 'black'));
  };
  const handleSelectGender = (gender) => {
    setSelectGender(gender);
  };
  const handleRegister = () => {
    if (password !== confirmPassword){
      Alert.alert('Error', 'Password do not match!');
      return;
    }
    Alert.alert('Success',`Welcome, ${username}!`)
  };
//The content of the 
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <Text style={styles.title}>Register</Text>
        <TextInput style={styles.input} placeholder='Username' value={username} onChangeText={setUsername} />
        <TouchableOpacity style={[styles.option, selectgender == 'male' && styles.selected]} onPress={() => handleSelectGender('male')}> <Text style={styles.optionText}>Male</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.option, selectgender == 'female' && styles.selected]} onPress={() => handleSelectGender('female')}> <Text style={styles.optionText}>Female</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.option, selectgender == 'other' && styles.selected]} onPress={() => handleSelectGender('other')}> <Text style={styles.optionText}>Other</Text></TouchableOpacity>
        <TextInput style={styles.input} placeholder='Phone No.' keyboardType='phone-pad' value={phonenumber} onChangeText={setPhonenumber} />
        <TextInput style={styles.input} placeholder='Address' keyboardType='default' value={address} onChangeText={setAddress} />
        <TextInput style={styles.input} placeholder='District' keyboardType='default' autoCapitalize='words' value={district} onChangeText={setDistrict} />
        <TextInput style={styles.input} placeholder='Email' keyboardType='email-address' value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder='Password' secureTextEntry value={password} onChangeText={setPassword} />
        <TextInput style={styles.input} placeholder='Confirm Password' secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={[styles.buttonText, { color: textColor }]}>Next</Text>
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
    padding: 0,
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
    textAlign: 'center',
  },
  option: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: 'lightgrey',
    width: '80%',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#6200ee',

  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  selectedText: {
    color: '#fff',
  },
  button: {
    backgroundColor: 'lightgray',
    padding: 15,
    borderRadius: 5,
    alignItems: 'end',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});