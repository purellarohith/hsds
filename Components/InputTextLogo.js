/* eslint-disable prettier/prettier */

import React from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icons from 'react-native-vector-icons/AntDesign';
import { width } from './constants';
import MobileCode from './LoginScreen/MobileCode';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { UserDetails } from './MainState';

const InputTextLogo = ({ type, name, check, keys }) => {

  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [displayCountry, setDisplayCountry] = React.useState(false);
  const [user, setUser] = React.useContext(UserDetails);
  const [userCat,setUserCat] = React.useState(true);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const convertDate = (inputFormat) => {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
  };

  const handleDown = () => {
    if (name === 'Select Country') {
      if (displayCountry === false) {
        setDisplayCountry(true);
      }
      if (displayCountry === true) {
        setDisplayCountry(false);
      }
    }
  };

  const handleConfirm = (date) => {

    setValue(convertDate(date));
    hideDatePicker();
  };
  const checkText = (text) => {
    if (text.length === 10) {
      console.log(text);
      setUser({ ...user, mobile: text });
    }
  };

  if (type === 'down') {
    return (
      <>
        <View style={styles.mainView}>
          <View style={styles.textView}>
            <Text style={[styles.text, { color: check ? 'red' : '#B5B5B5' }]}>{name}</Text>
          </View>
          <View style={styles.inputTextView}>
            <TextInput
              style={[styles.inputext, { borderColor: check ? 'red' : '#B5B5B5' }]}
              keyboardType={keys}
              value={user.countryCode + '   |    ' + user.country}
            />
            <TouchableOpacity style={styles.iconView} onPress={() => handleDown()} >
              <Icon name={'chevron-down'} size={40} />
            </TouchableOpacity>
          </View>
        </View>
        <Modal
          animationType="slide"
          visible={displayCountry}
          onRequestClose={() => {
            handleDown();
          }}
        >
          <TouchableOpacity
            style={{ backgroundColor: '#fff', width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end' }}
            onPress={() => handleDown()}>
            <Text>X</Text>
          </TouchableOpacity>
          <MobileCode />
        </Modal>
      </>
    );
  }
  if (type === 'empty') {
    return (
      <View style={styles.mainView}>
        <View style={styles.textView}>
          <Text style={[styles.text, { color: check ? 'red' : '#B5B5B5' }]}>{name}</Text>
        </View>
        <View style={styles.inputTextView}>
          <TextInput maxLength={10} keyboardType={keys}
            style={[styles.inputext, { borderColor: check ? 'red' : '#B5B5B5' }]}
            onChangeText={(text) => checkText(text)}
          />
        </View>
      </View>
    );
  }
  if (type === 'cal') {
    return (
      <View style={styles.mainView}>
        <View style={styles.textView}>
          <Text style={[styles.text, { color: check ? 'red' : '#B5B5B5' }]}>{name}</Text>
        </View>
        <View style={styles.inputTextView}>
          <TextInput
            keyboardType={keys}
            style={[styles.inputext, { borderColor: check ? 'red' : '#B5B5B5' }]}
            value={value}
          />
          <TouchableOpacity style={styles.iconView} onPress={showDatePicker}  >
            <Icons name={'calendar'} size={30} style={{ fontWeight: 'normal' }} />
          </TouchableOpacity>
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    );
  }
};

export default InputTextLogo;

const styles = StyleSheet.create({
  mainView: {
    // backgroundColor: 'green',
    height: 100,
    justifyContent: 'center',
    // marginBottom:0
  },
  textView: {
    position: 'absolute',
    top: 15,
    left: 40,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  inputTextView: {
    paddingHorizontal: 16,
  },
  inputext: {
    borderWidth: 1,
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 16,
    color: '#000',
    width: width - 62,
  },
  iconView: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 0,
    right: 15,
    // backgroundColor:'#fff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
    alignSelf: 'flex-end',
    borderRadius: 25,
  },

});
