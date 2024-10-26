import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import the Picker component

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [contactReason, setContactReason] = useState('');
  const [selectedTerm, setSelectedTerm] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !phoneNumber || !message || !selectedTerm) {
      alert('Please fill in all the fields and select a term.');
      return;
    }

    alert(`Submitted, Thank You!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phoneNumber}\nReason: ${contactReason}\nMessage: ${message}\nSelected Term: ${selectedTerm}`);

    // Clear the form after submission
    setName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');
    setContactReason('');
    setSelectedTerm('');
  };

  return (
    <ImageBackground
    source={require('../assets/leaf.jpg')} 
      style={styles.background}>
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.title}>Get in Touch</Text>
      <Text style={styles.subtitle}>Reach out to us with your questions or queries.</Text>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Full name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="+1 555-1234"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Reason for Contact</Text>
      <View style={styles.radioGroup}>
        <TouchableOpacity onPress={() => setContactReason('Support')}>
          <Text style={styles.radioOption}>{contactReason === 'Support' ? '●' : '○'} Support</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setContactReason(' Course Information')}>
          <Text style={styles.radioOption}>{contactReason === ' Course Information' ? '●' : '○'} Course Information</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setContactReason('Feedback')}>
          <Text style={styles.radioOption}>{contactReason === 'Feedback' ? '●' : '○'} Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setContactReason('Other')}>
          <Text style={styles.radioOption}>{contactReason === 'Other' ? '●' : '○'} Other</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Type your message here"
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
      />

      <Text style={styles.label}>Age</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedTerm}
          onValueChange={(itemValue) => setSelectedTerm(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Age" value="" />
          <Picker.Item label="20-25"/>
 <Picker.Item label="25-30" value="term2" />
 <Picker.Item label="other" value="term3" />
</Picker>

</View>

<TouchableOpacity style={styles.button} onPress={handleSubmit}>
<Text style={styles.buttonText}>Submit</Text>
</TouchableOpacity>

</ScrollView>
</ImageBackground>

);
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ensures the image covers the entire background
  },
container: {
flexGrow: 1,
justifyContent: 'center',
alignItems: 'center',
padding: 20,

},
title: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 10,
},
subtitle: {
fontSize: 16,
color: '#000',
marginBottom: 20,
fontWeight: 'bold',
},
inputGroup: {
flexDirection: 'row',
justifyContent: 'space-between',
width: '100%',
},
input: {
flex: 1,
padding: 12,
margin: 5,
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 5,
backgroundColor: '#f9f9f9',
},
label: {
alignSelf: 'flex-start',
fontWeight: 'bold',
marginTop: 10,
marginBottom: 5,
},
radioGroup: {
flexDirection: 'column',
alignSelf: 'flex-start',
},
radioOption: {
marginVertical: 5,
fontSize: 16,
},
textArea: {
height: 100,
textAlignVertical: 'top',
},
pickerContainer: {
width: '100%',
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 5,
marginVertical: 10,
},
picker: {
height: 50,
width: '100%',
},
button: {
backgroundColor: '#007BFF',
padding: 15,
borderRadius: 5,
width: '100%',
alignItems: 'center',
marginTop: 20,
},
buttonText: {
color: '#fff',
fontWeight: 'bold',
fontSize: 16,
},
});