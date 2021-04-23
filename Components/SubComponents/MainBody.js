/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { width } from '../constants';
import { UserDetails } from '../MainState';
import About from '../SplashScreen/About';
import auth from '@react-native-firebase/auth';

const imageOne = require('./../Images/imageone.png');
const imageTwo = require('./../Images/imagetwo.png');
const imageThree = require('./../Images/imagethree.png');
const imageFour = require('./../Images/imagefour.png');




const MainBody = ({ screenType, children, btnText, navigation, type }) => {

  const [user, setUser] = React.useContext(UserDetails);

  const otpHandler = async () => {
    // try {
    //   console.log(user.mobile);
    //   if (user.mobile !== '') {
    //     const authData = await auth().signInWithPhoneNumber(user.countryCode + user.mobile);
    //     console.log(JSON.stringify(authData));
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
    navigation.navigate('OtpScreen');
  };


  return (
    <View style={styles.mainView}>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.7, y: 1.0 }}
        colors={['#FDAE1C', '#FF5B08']}
        style={styles.innermainView}
      >
        <View style={styles.imageView}>
          <Image style={styles.imageone} source={imageFour} resizeMode={'center'} />
        </View>
      </LinearGradient>
      <View style={styles.midView} >
        <View style={styles.textView}>
          <Text style={styles.loginText}>{screenType}</Text>
        </View>
        <View style={styles.midmid}>
          {children}
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.btn} onPress={() => type === 'one' ? otpHandler() : navigation.navigate('Register')}>
            <Text style={styles.btnText}>{btnText}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomView} >
        <About />
      </View>
    </View>
  );
};

export default MainBody;

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    flex: 1,
    // backgroundColor: 'pink',
  },
  innermainView: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  midView: {
    flex: 0.45,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  bottomView: {
    flex: 0.25,
    // backgroundColor: 'yellow',
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
  loginText: {
    marginTop: 16,
    fontSize: 24,
    color: '#ED6206',
    fontWeight: 'bold',
  },
  textView: {
    flex: 0.2,
    // backgroundColor: 'yellow',
  },
  midmid: {
    flex: 0.6,
    // backgroundColor: 'gray',
  },
  btnView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#ED6206',
    borderRadius: 25,
    width: width - 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
