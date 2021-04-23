/* eslint-disable prettier/prettier */

import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { codes } from '../codes';
import { height, width } from '../constants';
import { UserDetails } from '../MainState';









const MobileCode = () => {

  const [user, setUser] = React.useContext(UserDetails);

  const selectCountry = (item) => {
    setUser({ ...user, countryCode: item.dial_code, country: item.name });
  };


  const renderItems = ({ item, index }) => {

    return (
      <TouchableOpacity  style={styles.selectMainView} onPress={() => selectCountry(item)}>
        <Text>{item.dial_code}</Text>
        <Text>{item.name}</Text>
        <Text>{item.code}</Text>
      </TouchableOpacity>
    );
  };



  return (
    <View style={styles.mainView}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={codes}
        renderItem={renderItems}
      // initialScrollIndex={findIndex}
      />
    </View>
  );
};

export default MobileCode;

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    // maxHeight:height / 2
  },
  selectMainView: {
    width: width,
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
});
