import React from 'react';
import styless from '../components/styless'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
  } from 'react-native';

const Button2 = ({title, onPress=()=>{}}) =>{
    return(
        <TouchableOpacity
            activeOpacity={0.7}
            style= {styles.button_2}
            onPress={onPress}
            >
                <Text style = {styles.text_2}> {title} </Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button_2 : {
    height: 45,
    width: styless.widowWidth - 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: 20,
    backgroundColor: '#7D5A50',
    borderRadius: 100,
    },
    text_2 : {
        color: 'white',
        fontSize: 16,

    },
})
export default Button2;