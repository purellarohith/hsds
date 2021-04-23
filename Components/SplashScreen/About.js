/* eslint-disable prettier/prettier */

import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const imageOne = require('./../Images/imageone.png');
const imageTwo = require('./../Images/imagetwo.png');
const imageThree = require('./../Images/imagethree.png');
const imageFour = require('./../Images/imagefour.png');




export default function About() {
  return (
    <>
    <View style={styles.aboutView}>
          <Text style={styles.textone}>Developed By</Text>
          <Image
            style={styles.imagethree}
            source={imageThree}
            resizeMode={'center'}
          />
          <Text style={styles.texttwo}>Humming Sparrow</Text>
          <Text style={styles.textthree}>Digital Solution</Text>
          <Text style={styles.textfour}>HSDS</Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  aboutView: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom:25
  },
  imagethree: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  textone: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'normal',
  },
  texttwo: {
    fontSize: 16,
    fontWeight: '600',
  },
  textthree: {
    fontSize: 12,
    fontWeight: 'normal',
    marginVertical: 5,
  },
  textfour: {
    fontSize: 14,
    fontWeight: 'bold',
  },
})
