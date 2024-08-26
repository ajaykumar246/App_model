import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, ImageBackground, TextInput, Alert, Platform, KeyboardAvoidingView } from 'react-native';
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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        {/* White overlay */}
        <View style={styles.overlay}>
          <Text style={styles.title}>Register</Text>
          <Text style={styles.info}>Enter your name</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />

          {/* Wrap the radio buttons in a horizontal container */}
          <Text style={styles.info}>Gender</Text>
          <View style={styles.radioGroup}>
            {renderRadioButton('male', 'Male')}
            {renderRadioButton('female', 'Female')}
            {renderRadioButton('other', 'Other')}
          </View>
          <Text style={styles.info}>Phone no.</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone No."
            keyboardType="phone-pad"
            value={phonenumber}
            onChangeText={setPhonenumber}
          />
          <Text style={styles.info}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
          />
          <Text style={styles.info}>District</Text>
          <TextInput
            style={styles.input}
            placeholder="District"
            autoCapitalize="words"
            value={district}
            onChangeText={setDistrict}
          />
          <Text style={styles.info}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.info}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Text style={styles.info}>Confirm Password</Text>
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
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.4)', // White color with 80% opacity
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    textAlign: 'left',
    width: '100%',
    paddingLeft: 20,
    marginBottom: 5,
    fontSize: 16,
    color: 'black',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: 'lightgray',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
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
