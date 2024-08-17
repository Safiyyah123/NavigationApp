import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types'; // Ensure this path is correct



export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1}></Stack.Screen>
        <Stack.Screen name="Screen2" component={Screen2}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

type Screen1Props = NativeStackScreenProps<RootStackParamList, 'Screen1'>;
const Screen1: React.FC<Screen1Props> = (props) => {
  const [name, setName] = useState<string>(''); // State for name
  const [surname, setSurname] = useState<string>(''); // State for surname
  const [studentNumber, setStudentNumber] = useState<string>(''); // State for student number
  
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.text1}>Enter your name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.text1}>Enter your surname:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter surname"
          value={surname}
          onChangeText={setSurname}
        />

        <Text style={styles.text1}>Enter your student number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your student number"
          value={studentNumber}
          onChangeText={setStudentNumber}
        />

        <TouchableHighlight
          style={styles.button}
          onPress={() => props.navigation.navigate('Screen2', { name, surname, studentNumber })} // Corrected syntax
        >
          <Text style={styles.buttonText}>Save Name</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

type Screen2Props = NativeStackScreenProps<RootStackParamList, 'Screen2'>;
const Screen2: React.FC<Screen2Props> = (props) => {
  // Destructure parameters from props.route.params
  const { name, surname, studentNumber } = props.route.params;

  return (
    <View style={styles.container3}>
      <View style={styles.container4}>
        <Text style={styles.text2}>Hi, {name} {surname}</Text> {/* Display surname as well */}
        <Text style={styles.text2}>Student Number: {studentNumber}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F08080',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text1: {
    textAlign: 'auto',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
  },
  text2: {
    textAlign: 'auto',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  container2: {
    marginTop: 400,
    width: 500,
    height: 400,
    backgroundColor: '#CD5C5C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    flex: 1,
    backgroundColor: '#F08080',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container4: {
    marginTop: 300,
    width: 500,
    height: 400,
    backgroundColor: '#F08080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    width: 400,
    height: 40,
    backgroundColor: 'green',
    paddingHorizontal: 10,
    marginVertical: 1,
    borderRadius: 5,
    color: 'lightgreen',
    marginTop: 20,
    fontSize: 20,
  },
});
