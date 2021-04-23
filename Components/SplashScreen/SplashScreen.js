/* eslint-disable prettier/prettier */

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { height, width } from '../constants';
import About from './About';

const imageOne = require('./../Images/imageone.png');
const imageTwo = require('./../Images/imagetwo.png');
const imageThree = require('./../Images/imagethree.png');
const imageFour = require('./../Images/imagefour.png');




const SplashScreen = ({ navigation }) => {

  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 700);
  }, [navigation]);


  // console.log(height * 0.5);
  return (
    <View style={styles.main}>
      <View style={styles.topView}>
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.7, y: 1.0 }}
          colors={['#FCC020', '#FE6C0B']}
          style={styles.linerView}>
          <Image source={imageOne} style={styles.imageone} />
        </LinearGradient>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.imageView}>
          <Image
            source={imageTwo}
            style={styles.imagetwo}
            resizeMode={'contain'}
          />
        </View>
        <About />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topView: {
    flex: 0.45,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  linerView: {
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    width: width + 200,
    height: width + 100,
    borderBottomLeftRadius: width + 100 / 2,
    borderBottomRightRadius: width + 100 / 2,
    position: 'relative',
    top: -(width - width * 0.7),
    left: 0,
  },
  imageone: {
    width: width - 200,
    height: width - 200,
    position: 'absolute',
    top: width * 0.6,
  },
  bottomView: {
    // backgroundColor: 'green',
    flex: 0.55,
    justifyContent: 'space-evenly',
  },
  imageView: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: width * 0.5,
    // backgroundColor:'pink',
    marginTop: 10,
  },
  imagetwo: {
    width: width - 150,
    height: width * 0.8 - 150,
    // backgroundColor:'yellow'
  },

});
