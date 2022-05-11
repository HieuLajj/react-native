
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from './colors'
//import Wave from 'react-native-waveview'
import {

  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

const TodoButton = ({focused}) =>{
        return(
            <View style={{position:'absolute', alignItems:'center'}}>
                  
                    <View>
                        <FontAwesome name='clipboard' size={24} color= {focused? colors.blue: colors.black}></FontAwesome>
                    </View>
                   
            </View>
        )
}
export default TodoButton;
