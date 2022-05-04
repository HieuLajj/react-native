import React, {Component,useRef,useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Keyboard, 
  Animated,
  Button,
} from 'react-native';
export default HomeScreen =( {navigation,route} )=>{
  const topMotion = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(topMotion,
      {
        toValue: 400,
        duration: 2000,
        useNativeDriver: false,
      }).start();
  }
  return (
    <View style={{flex:1, borderWidth:5, borderColor:'red'}}>
        <Button title='faew' onPress={fadeIn}/>
        <Animated.View style = {{marginTop: topMotion,backgroundColor:'blue',width:50,height:50}}></Animated.View>
        <Text>Laivanehidrru</Text>
    </View>
  );
}