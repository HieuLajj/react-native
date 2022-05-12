
import React from 'react';
import COLORS from '../components/colors';
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
  Image,
} from 'react-native';
import styless from '../components/styless';


const SalonListDentails= ({navigation,route}) => {
  const {item} = route.params;
  return (
    <View style={{flex:1,backgroundColor:item.color}}>
      <View style={{height:'20%'}}>
        {/* <View style={[StyleSheet.absoluteFillObject,{backgroundColor:item.color,borderRadius:10}]}/> */}
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={styles.name}>{item.name}</Text>
          <Image source={item.image} style={styles.image}/>
        </View>
        {/* <Text style={styles.text}>-{item.total}</Text> */}
      </View>
      <View style={{
        height:'75%',
        width:'90%',
        backgroundColor: COLORS.brown1,
        marginHorizontal:20,
        borderRadius:30,
        shadowColor:'#000',
        shadowOffset:{
          width:0,
          height:6,
        },
        shadowOpacity:0.37,
        shadowRadius:8,

      }}>
        <Text style={{padding:20,fontSize:25, fontWeight:'500'}}>Last Records</Text>
        <View style={{borderBottomWidth:2, width:'90%', opacity:0.5, marginHorizontal:20}}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  
  body_title : {
    height:45,
    flexDirection: 'row',
    //paddingTop: 0,
    //padding: 20,
    paddingLeft:20,
    paddingBottom:5,
    justifyContent:'space-between',
  },
  name:{
    fontWeight:'700',
    fontSize:18,
  },
  image:{
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  text: {
    color: 'red',
    fontWeight:'bold',
    fontSize:20
  },
  list:{
    flex:1,
    flexGrow:1,
  },
  bg: {
    position:'absolute',
    width: styless.widowWidth,
    height: styless.widoHeight,
    backgroundColor:'red',
    transform: [{translateY: styless.widoHeight/2}],
  }
}
)

export default SalonListDentails;
