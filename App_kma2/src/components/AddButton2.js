
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
} from 'react-native';


const AddButton2 = () =>{
        return(               
                    <View style={styles.button}>
                        <FontAwesome name={'plus'} size={24} color={'#fff'}></FontAwesome>
                      {/* //  name= {focused? 'gr': colors.black} */}
                    </View>
                   
        )
    
}
export default AddButton2;

const styles= StyleSheet.create({
    button: {
        backgroundColor:"#7f58ff",
        alignItems:'center',
        justifyContent: 'center',
        width:72,
        height:72,
        borderRadius:36,
       // position:"absolute",
      //  top: -50,
        shadowColor: "red",
        shadowRadius: 5,
        shadowOffset: {height:10},
        shadowOpacity:0.3,
        borderWidth: 3,
        borderColor: "#fff"
    }
})
