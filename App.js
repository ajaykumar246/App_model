import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, ImageBackground, TextInput, Alert } from 'react-native';
import backgroundImage from './assets/ba.jpg';
export default function App() {
  const [username, setUsername] = useState('');
  const [selectGender, setSelectGender] = useState(null);
  const [phonenumber, setPhonenumber] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }
    Alert.alert('Success', `Welcome, ${username}!`);
  };

  const renderRadioButton = (gender, label) => (
    <TouchableOpacity onPress={() => setSelectGender(gender)} style={styles.radioContainer}>
      <View style={[styles.radioButton, selectGender === gender && styles.radioButtonSelected]} />
      <Text style={styles.radioLabel}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        
        {/* Wrap the radio buttons in a horizontal container */}
        <View style={styles.radioGroup}>
          {renderRadioButton('male', 'Male')}
          {renderRadioButton('female', 'Female')}
          {renderRadioButton('other', 'Other')}
        </View>

        <TextInput
          style={styles.input}
          placeholder="Phone No."
          keyboardType="phone-pad"
          value={phonenumber}
          onChangeText={setPhonenumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="District"
          autoCapitalize="words"
          value={district}
          onChangeText={setDistrict}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={[styles.buttonText, { color: 'black' }]}>Next</Text>
        </TouchableOpacity>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: 'white',
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
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
    marginTop: '1%',
    backgroundColor: 'lightgray',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  radioGroup: {
    flexDirection: 'row',  // Aligns radio buttons horizontally
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  radioButtonSelected: {
    backgroundColor: 'black',
  },
  radioLabel: {
    fontSize: 16,
    color: 'black',
  },
  button: {
    backgroundColor: 'lightgray',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});