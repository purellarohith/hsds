/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const UserDetails = React.createContext();


const MainState = ({ children }) => {

  const [user, setUser] = React.useState({countryCode:'', country: '', mobile: '', firstName: '', lastName: '', dateOfBirth: '', email: '', referral: '', userCategery: '', pincode: '' });
  const [time, setTime] = React.useState(120);
  const[otp,setOtp] = React.useState('');

  return (
    <UserDetails.Provider value={[user, setUser]}>
      {children}
    </UserDetails.Provider>
  );
};

export default MainState;


