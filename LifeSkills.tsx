import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal } from "react-native";

export default function LifeSkillsScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');


  const handlePress = (text, title) => {
    setModalTitle(title);
    setModalText(text);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Header with Image */}
      <View style={styles.headerContainer}>
      <Image
          source={require('../assets/lifeskills.jpg')} 
          style={styles.headerImage}
        />
     
      </View>

      {/* Course Information */}
     
        <Text style={styles.courseTitle}>Life Skills</Text>
        <Text style={styles.mentorText}>Empowering the Nation </Text>

        <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() =>
            handlePress(
             `•Communication, conflict resolution, and interpersonal skills. \n .
              •Time management and goal-setting techniques. \n
              •Financial literacy: budgeting and saving. \n
              •Basic home management (cooking, cleaning, repairs). \n
              •Emotional intelligence and mental well-being practices. `,
              'What You’ll Learn:',
            )
          }
        >
          <Text style={styles.tabText}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() =>
            handlePress(
             `•Journals for goal setting and reflections. \n
              •Budgeting worksheets. \n
              •DIY repair tools. \n
              •Educational videos or workbooks.\n
              •Roleplay materials for communication exercises.`,
              'Materials You’ll Need:',
            
            )
          }
        >
          <Text style={styles.tabText}>Materials</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() =>
            handlePress(
             `•Strong interpersonal and communication abilities.  \n
              •Time management and financial planning skills. \n
              •Improved emotional regulation and problem-solving.  \n
              • Practical skills for everyday home management`,
            'Skills You Will Develop:',
            )
          }
        >
          <Text style={styles.tabText}>Skills</Text>
        </TouchableOpacity>
      </View>
   

      {/* About Course */}
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>About Course</Text>
        <Text style={styles.aboutText}>
        This course focuses on building essential personal, social, and practical skills to help individuals lead productive and healthy lives.
        </Text>
      </View>
      <View style={styles.statsContainer}>
      <View style={styles.statBox}>
          <Text style={styles.statValue}>R1500</Text>
          <Text style={styles.statLabel}>Cost</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>130</Text>
          <Text style={styles.statLabel}>Classes</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>6 Months</Text>
          <Text style={styles.statLabel}>Duration</Text>
        </View>
      </View>
      {/* Enroll Button */}
      <TouchableOpacity style={styles.enrollButton} onPress={() => navigation.navigate('Enroll')}>
        <Text style={styles.enrollButtonText}>Enroll Now</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{modalTitle}</Text>
            <Text style={styles.modalText}>{modalText}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  modalTitle: {
     fontSize: 20, 
     fontWeight: 'bold', 
     marginBottom: 10, 
     textAlign: 'center'
     },
  headerContainer: {
    position: "relative",
  },
  headerImage: {
    width: "100%",
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
 
  courseInfoContainer: {
    padding: 20,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: 'center'
  },
  mentorText: {
    fontSize: 16,
    color: "#888",
    marginBottom: 20,
     textAlign: 'center'
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tab: {
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#6C63FF",
  },
  tabText: {
    fontSize: 16,
    color: "#6C63FF",
    fontWeight: "bold",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  statBox: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  statLabel: {
    fontSize: 14,
    color: "#888",
  },
  aboutContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 40,
  },
  aboutText: {
    fontSize: 16,
    color: "#000",
  },
  enrollButton: {
    backgroundColor: "#6C63FF",
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  enrollButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: { 
    fontSize: 18, 
    textAlign: 'center', 
    marginBottom: 15 
  },
  closeButton: { 
    marginTop: 10, 
    padding: 10, 
    backgroundColor: '#3498db', 
    borderRadius: 5 
  },
  closeButtonText: { 
    color: 'white', fontSize: 16 },
});