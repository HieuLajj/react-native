
import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {updateEmail} from '../redux/actions/updateAction'

//import Wave from 'react-native-waveview'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} from 'react-native';



const SettingScreen= () => {
  const info = useSelector((state)=>state.personalInfo)
  const [text, onChangeText] = React.useState("");
  const dispatch = useDispatch();

  useEffect(()=>{

    console.log("INFO",info)
  },[])
  return (
      <View>
        <Text>{info.email}</Text>
       <TextInput
         style={{height:40,width:100 ,margin:12, borderWidth:1, padding:10}}
         onChangeText={onChangeText}
         autoCapitalize="none"
         value={text}
       />
       <TouchableOpacity
        onPress={()=>{dispatch(updateEmail(text))}}
        style={{backgroundColor:'red'}}
       >
         <Text>Thay doi</Text>
       </TouchableOpacity>
      </View>
  
  );
};


export default  SettingScreen;
