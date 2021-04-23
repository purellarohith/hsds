/* eslint-disable prettier/prettier */

import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { height, width } from '../constants';
import InputTextLogo from '../InputTextLogo';
import About from '../SplashScreen/About';
import MainBody from '../SubComponents/MainBody';

const imageOne = require('./../Images/imageone.png');
const imageTwo = require('./../Images/imagetwo.png');
const imageThree = require('./../Images/imagethree.png');
const imageFour = require('./../Images/imagefour.png');


const LoginScreen = ({navigation}) => {
  return (
    <MainBody btnText={'Get OTP'} screenType={"Login"} navigation={navigation} type={"one"}>
      <InputTextLogo type={'down'} name={'Select Country'}  />
      <InputTextLogo type={'empty'} name={'Mobile No.'} keys={"number-pad"} />
    </MainBody>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
  },
  topView: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    width: width,
    height: width,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'pink'
  },
  imageone: {
    width: width - 200,
    height: width - 200,
  },
  bottomView: {
    flex: 0.7,
    // backgroundColor: 'pink',
    paddingHorizontal: 16,
  },
  loginText: {
    marginTop: 16,
    fontSize: 24,
    color: '#ED6206',
    fontWeight: 'bold',
  },
  inputMainView: {
    marginTop: 16,
    // backgroundColor:'pink',
    justifyContent: 'space-evenly',
  },
  // textTime:{
  //   textAlign:'center',
  //   color: '#ED6206',
  //   fontWeight:'bold'
  // },
  otpBtn: {
    backgroundColor: '#ED6206',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: width - 100,
    height: 50,
    borderRadius: 25,
    marginTop: 25,
  },
  textOtp: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
  bottomAbout: {
    width: width,
    height: height * 0.2,
    justifyContent: 'flex-end',
    // backgroundColor:'pink'
  },
});
