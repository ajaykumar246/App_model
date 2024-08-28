import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, ImageBackground, TextInput, Alert, Platform, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for the eye icon
import backgroundImage from './assets/ba.jpg';

export default function Register_page() {
  const [username, setUsername] = useState('');
  const [selectGender, setSelectGender] = useState(null);
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        {/* White overlay */}
        <View style={styles.overlay}>
          <Text style={styles.title}>Register</Text>
          <Text style={styles.info}>Enter your Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={username}
            onChangeText={setUsername}
          />

          {/* Wrap the radio buttons in a horizontal container */}
          <Text style={styles.info}>Gender:</Text>
          <View style={styles.radioGroup}>
            {renderRadioButton('male', 'Male')}
            {renderRadioButton('female', 'Female')}
            {renderRadioButton('other', 'Other')}
          </View>
          <Text style={styles.info}>Phone No:</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone No."
            keyboardType="phone-pad"
            value={phonenumber}
            onChangeText={setPhonenumber}
          />


          <Text style={styles.info}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.info}>Password:</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              secureTextEntry={!showPassword} // Toggle visibility
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} color="gray" />
            </TouchableOpacity>
          </View>

          <Text style={styles.info}>Confirm Password:</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirm Password"
              secureTextEntry={!showConfirmPassword} // Toggle visibility
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Ionicons name={showConfirmPassword ? 'eye' : 'eye-off'} size={24} color="gray" />
            </TouchableOpacity>
          </View>

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
    backgroundColor: 'rgba(0, 31, 63, 0.7)',
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
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    height: 30,
    textAlign: 'left',
    width: '80%',
    borderBottomWidth: 1, // Only bottom border
    borderBottomColor: 'white', // Color of the line
    fontSize: 18, // Adjust the font size as needed
    marginBottom: 15,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  radioGroup: {
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    backgroundColor: 'chocolate',
  },
  radioLabel: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 15,
    width: '80%',
  },
  passwordInput: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 5,
  },
  button: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});