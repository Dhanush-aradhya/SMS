import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  const sendSMS = async () => {
    if (!phoneNumber || !customMessage) {
      Alert.alert('Error', 'Please provide both phone number and message part.');
      return;
    }

    // Predefined message template
    const preTypedMessage = `An amount of ₹ ${customMessage} has been credited by the Gram Panchayat of Nanjangudu for the service`;

    try {
      const response = await axios.post('http://10.0.2.2:3000/sendSMS', {
        to: phoneNumber,
        body: preTypedMessage,
      });

      if (response.data.success) {
        Alert.alert('Success', 'Message sent successfully!');
      } else {
        Alert.alert('Failed', 'Could not send the message.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred while sending the message.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter recipient's phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Amount"
        value={customMessage}
        onChangeText={setCustomMessage}
      />
      <Button title="Send SMS" onPress={sendSMS} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default App;
