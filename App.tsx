import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importing screen components
import HomeScreen from './HomeScreen';
import AddMenuItemScreen from './contexts/addMenuItemScreen';
import SelectCourseScreen from './SelectCourseScreen';
import DescriptionScreen from './descriptionScreen';
import MenuScreen from './contexts/MenuScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="MenuContext" component={MenuScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Description" component={DescriptionScreen} />
        <Stack.Screen name="AddMenuItem" component={AddMenuItemScreen} />
        <Stack.Screen name="SelectCourse" component={SelectCourseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainScreen = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={require('./assets/images/spicy3.jpg')} // Ensure this image exists in your assets folder
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to Chrisstoffel's Ramen Restaurant</Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.homeButton]}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>Go to Home Screen</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.descriptionButton]}
            onPress={() => navigation.navigate('Description')}
          >
            <Text style={styles.buttonText}>Go to Description</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.selectCourseButton]}
            onPress={() => navigation.navigate('SelectCourse')}
          >
            <Text style={styles.buttonText}>Go to Select Course</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: '#FFFCFC',
    textAlign: 'center',
    marginBottom: 20,
    paddingTop: 50,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '80%',
    padding: 15,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  homeButton: {
    backgroundColor: '#FF6347', // Home button color
  },
  descriptionButton: {
    backgroundColor: '#32CD32', // Description button color
  },
  selectCourseButton: {
    backgroundColor: '#1E90FF', // Select Course button color
  },
});

export default App;
