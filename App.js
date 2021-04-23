/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import OtpScreen from './Components/OtpScreen/OtpScreen';
import Register from './Components/Register/Register';
import SplashScreen from './Components/SplashScreen/SplashScreen';
import { createStackNavigator } from '@react-navigation/stack';
import MainState from './Components/MainState';
const App = () => {
  enableScreens();
  const Stack = createStackNavigator();
  return (
    <MainState>
      <StatusBar hidden={true} />
      <View style={styles.main}>
        <NavigationContainer  >
          <Stack.Navigator headerMode={false} initialRouteName={'SplashScreen'}  >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="OtpScreen" component={OtpScreen} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </MainState>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
