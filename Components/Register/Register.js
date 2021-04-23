/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { width } from '../constants';
import InputTextLogo from '../InputTextLogo';

const Register = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.topView}>
        <Text style={styles.text}>{'Registration'}</Text>
      </View>
      <View style={styles.midView}>
        <InputTextLogo type={'empty'} name={'First name'} />
        <InputTextLogo type={'empty'} name={'Last name'} />
        <InputTextLogo type={'cal'} name={'date of birth'} />
        <InputTextLogo type={'empty'} name={'Email'} check={true} />
        <InputTextLogo type={'empty'} name={'Referral code'} />
        <InputTextLogo type={'down'} name={'User Category'} />
        <InputTextLogo type={'empty'} name={'pincode'} keys={'number-pad'} />
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.btnView}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#fff',
    display: 'flex',
    flex: 1,
    paddingHorizontal: 16,
  },
  topView: {
    flex: 0.1,
    // backgroundColor:'pink',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ED6206',
  },
  midView: {
    flex: 0.75,
    justifyContent: 'space-evenly',
    // backgroundColor:'green',s
    marginTop: 20,
  },
  bottomView: {
    flex: 0.15,
    // backgroundColor:'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnView: {
    width: width - 62,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B1ADA9',
    height: 50,
    borderRadius: 25,
  },
});
