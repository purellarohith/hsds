/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { height, width } from '../constants';
import About from '../SplashScreen/About';
import MainBody from '../SubComponents/MainBody';

const imageOne = require('./../Images/imageone.png');
const imageTwo = require('./../Images/imagetwo.png');
const imageThree = require('./../Images/imagethree.png');
const imageFour = require('./../Images/imagefour.png');




const OtpScreen = ({navigation}) => {
  return (
    <MainBody btnText={'Login'} screenType={'Enter OTP'} navigation={navigation} type={'two'}>
      <View style={styles.mainView}>
        <View style={styles.textView}>
          <Text style={styles.text}>An OTP has been sent on your phone</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput style={styles.input} maxLength={1} />
          <TextInput style={styles.input} maxLength={1} />
          <TextInput style={styles.input} maxLength={1} />
          <TextInput style={styles.input} maxLength={1} />
          <TextInput style={styles.input} maxLength={1} />
          <TextInput style={styles.input} maxLength={1} />
        </View>
        <View style={styles.bottom}>
          <Text style={styles.textsec}>00:43</Text>
        </View>
      </View>
    </MainBody>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  mainView: {
    // backgroundColor: 'pink',
  },
  textView: {
    marginTop:30,
  },
  text: {
    textAlign: 'center',
  },
  inputView: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  input: {
    borderBottomWidth: 1,
    color: '#000',
    fontSize: 22,
    textAlign: 'center',
  },
  bottom: {
    marginTop: 30,
  },
  textsec: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ED6206',
  },
});
