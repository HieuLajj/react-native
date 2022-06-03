
import React, {useEffect, useRef} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {
  StyleSheet, 
  View,
  Animated,
  
  TouchableOpacity,
} from 'react-native';
import COLORS from './colors';
import { current } from '@reduxjs/toolkit';


const AddButton = ({focused}) =>{
    const startAnimation = {

        0: {
            scale:.5,
            rotate: '0deg',
        },
      
        1: {
            scale:1.5,
            rotate: '360deg'
        },
      };
      const endAnimation = {
        from: {
            scale:1.5,
            rotate: '360deg'
        },
        to: {
            scale:1,
            rotate: '0deg',
        },
      };
  
        return(
            <View style={{position:'absolute', alignItems:'center'}}>
                  
                     {/* <View style={styles.button}>
                        <FontAwesome name={focused ? 'plane': 'plus'} size={24} color={focused ? 'yellow': '#fff'}></FontAwesome>
                     </View> */}
                     <Animatable.View
                  
                     duration={4000}
                     animation = {focused?startAnimation:endAnimation}
                 
                     >
                        <FontAwesome name='sticky-note' size={24} color={focused? COLORS.blue: COLORS.black}></FontAwesome>
                     </Animatable.View>
                   
                    
                  
                  {/* <View>
                      <FontAwesome name='plus' size={24} color= {focused? COLORS.blue: COLORS.black}></FontAwesome>
                  </View> */}
                 
            </View>
            
        )
    
}
export default AddButton;

const styles= StyleSheet.create({
    button: {
        backgroundColor:"#7f58ff",
        alignItems:'center',
        justifyContent: 'center',
        width:72,
        height:72,
        borderRadius:36,
        position:"absolute",
        top: -50,
        shadowColor: "red",
        shadowRadius: 5,
        shadowOffset: {height:10},
        shadowOpacity:0.3,
        borderWidth: 3,
        borderColor: "#fff"
    }
})
