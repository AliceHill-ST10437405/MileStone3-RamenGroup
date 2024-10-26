import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker

// Sample courses data
const courses1 = [
  { title: 'First Aid', price: 1500 },
  { title: 'Sewing', price: 1500 },
  { title: 'Landscaping', price: 1500 },
  { title: 'Life Skills', price: 1500 },
];

const courses = [
  { title: 'Garden Maintenance', price: 750 },
  { title: 'Cooking', price: 750 },
  { title: 'Child Minding', price: 750 },
];

export default function CourseSelectionForm() {
  // State for user input fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  // State for selected courses and total fees
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalFees, setTotalFees] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null);




  // Calculate total fees based on selected courses
  const calculateTotalFees = () => {
    const total = selectedCourses.reduce((sum, course) => sum + course.price, 0);
    setTotalFees(total);
  };

  // Clear all selections
  const clearSelection = () => {
    setSelectedCourses([]);
    setTotalFees(0);
    setSelectedCourse(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Course:</Text>

      {/* User input fields */}
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      {/* Dropdown for selecting Six Month Course */}
      <Text style={styles.subheader}>Six Month Course:</Text>
      <Picker
        selectedValue={selectedCourse}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedCourse(itemValue)}
      >
        <Picker.Item label="Select a course" value={null} />
        {courses1.map((course) => (
          <Picker.Item key={course.title} label={`${course.title} (R${course.price})`} value={course.title} />
        ))}
      </Picker>

      {/* Dropdown for selecting Six Week Course */}
      <Text style={styles.subheader}>Six Week Course:</Text>
      <Picker
        selectedValue={selectedCourse}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedCourse(itemValue)}
      >
        <Picker.Item label="Select a course" value={null} />
        {courses.map((course) => (
          <Picker.Item key={course.title} label={`${course.title} (R${course.price})`} value={course.title} />
        ))}
      </Picker>

      {/* Buttons to calculate total fees and clear selection */}
      <Button title="Calculate Total Fees" onPress={calculateTotalFees} />
      <Button title="Clear Selection" onPress={clearSelection} color="red" />

      {/* Display total fees */}
      <Text style={styles.totalText}>Total Fees: R{totalFees}</Text>

      {/* Register button */}
      <Button title="Register" onPress={() => alert('Registered Successfully!')} />
    </View>
  );
}

// Define the styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  totalText: {
    fontSize: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
});
