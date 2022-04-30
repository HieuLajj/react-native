import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableHighlight,
} from 'react-native';


export default HomeScreen =( {navigation,route} )=>{
    return <Text>This is {route.params.name}'s profile</Text>;
}