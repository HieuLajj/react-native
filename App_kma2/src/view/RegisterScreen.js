import React, {Component,useRef,useEffect,useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Keyboard, 
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Input from '../components/Input'
import Button2 from '../components/Button2'
import COLORS from '../components/colors';

export default RegisterScreen =( {navigation} )=>{
  const [inputs, setInputs] = useState({
    email: '',
    fullname: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {

      handleError('Please input email', 'email');
      isValid = false;
    }else{
      let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
      if(!regex.test(inputs.email)){
        handleError('Please input a valid email', 'email');
        isValid = false;
      }
    }

    if (!inputs.fullname) {
      handleError('Please input fullname', 'fullname');
      isValid = false;
    }

    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    }else {
      let regex = RegExp(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/);
      if(!regex.test(inputs.phone)){
        handleError('Please input a valid phone', 'phone');
        isValid = false;
      }
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    }
    if (isValid) {
      register();
    }
  };

  const register = () => {
    alert("laivanhieu");
  }
  const handleOnChange = (text,input) => {
    setInputs(prevState=>({...prevState,[input]:text}));
  };
  const handleError = (error,input)=>{
    setErrors((prevState)=>({...prevState,[input]:error}));
  };

  return (
    <View style={[styles.container]}>
        <Text style={{
          color: 'black',
          fontSize: 30,
          fontWeight:'bold',
          textAlign:'center',
          width: '100%',
        }}>Create Free Account</Text>

        <View>
          <Input 
            iconName="email-outline" 
            placeholder="Enter your email address"
            error={errors.email}
            onFocus={()=>{
              handleError(null,'email');
            }}
            onChangeText = {(text) => handleOnChange(text,'email')}
          />
          <Input 
            iconName="account-outline" 
            placeholder="Enter your fullname"
            error={errors.fullname}
            onFocus={()=>{
              handleError(null,'fullname');
            }}
            onChangeText = {(text) => handleOnChange(text,'fullname')}
          />
          <Input 
            keyboardType="numeric"
            iconName="phone-outline" 
            placeholder="Enter your phone number"
            error={errors.phone}
            onFocus={()=>{
              handleError(null,'phone');
            }}
            onChangeText = {(text) => handleOnChange(text,'phone')}
          />
          <Input 
            iconName="lock-outline" 
            placeholder="Enter your password"
            error={errors.password}
            onFocus={()=>{
              handleError(null,'password');
            }}
            password
            onChangeText = {(text) => handleOnChange(text,'password')}
          />
        </View>
        <Button2 title="Register" onPress={validate}/>
        <Text 
          onPress={() => navigation.navigate('Login')}
          style={{
            marginTop: 10,
            color: COLORS.black,
            textAlign:'center',
            fontSize: 12,
          }}>
            Already have account ?Login
        </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
   // alignItems: 'center',
    justifyContent:'center',
    width:'100%',
    height:'100%',
    backgroundColor:"#FCDEC0",
  },
})