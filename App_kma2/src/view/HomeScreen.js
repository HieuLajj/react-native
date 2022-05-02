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
  TextInput,
  TouchableOpacity,
  Dimensions,
  Keyboard, 
} from 'react-native';
const widowWidth = Dimensions.get('window').width;
const widoHeight = Dimensions.get('window').height;

export default HomeScreen =( {navigation,route} )=>{
  const [keyboardShow, setKeyboardShow] = React.useState();
  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
          setKeyboardShow(true);
      }
      );
      const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
          setKeyboardShow(false);
      }
      );
  
      return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
      };
  },[]);
    return (
        <View>
          <Text>This is {route.params.name}'s profile</Text>
          <TextInput placeholder='E-mail' style={styles.textinput_body}/>
          <TouchableOpacity
                style= {styles.button_login}
                onPress={() =>{console.log("444aew")}}>
                    <Text style = {styles.text_login}> Login </Text>
          </TouchableOpacity>
          <View>
            <TextInput placeholder="input" style={{ marginTop: 100 }} />
            {keyboardShow ? <Text>keyboard show</Text> :<Text>Keyboard hidden</Text>}
          </View>
        </View>

        
    );
}
const styles = StyleSheet.create({
  textinput_body : {
    height: '100%',
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    backgroundColor:"red",
},
button_login : {
  height: 45,
  width: widowWidth - 60,
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 30,
  marginTop: 0,
  backgroundColor: '#7D5A50',
  borderRadius: 100,
},

});