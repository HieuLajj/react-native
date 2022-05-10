import React, {Component,useRef,useEffect,useState} from 'react';
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
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard, 
  Animated,
  Button,
  Image,
  state,
  FlatList,
} from 'react-native';
const {width} = Dimensions.get('window');
import colors from '../components/colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {faker} from '@faker-js/faker'
import SelectDropdown from 'react-native-select-dropdown'
import salon from '../components/salon'
const TODAY = 'TODAY';
const MONTH = 'MONTH';
export default HomeScreen =( {navigation,route} )=>{
  const [day, setday] = useState(TODAY);

  const countriesWithFlags = [
    {title: 'Clothes', image: require('../images/image_select/ic_Clothes.png')},
    {title: 'Food', image: require('../images/image_select/ic_Food.png')},
    {title: 'Medical', image: require('../images/image_select/ic_medical.png')},
    {title: 'Taxi', image: require('../images/image_select/ic_taxi.png')},
    {title: 'Other', image: require('../images/image_select/ic_working.png')},
    
  ];
  const SPACING =20;
  const AVATAR_SIZE = 70;
  return (
    <View style={styles.container}>
      <View style={{height:"25%"}}>
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.text_1}>My Budget</Text>
          <Text style={styles.text_2}>$537.432</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.body_title}>
          <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity
              onPress = {()=>{setday(TODAY)}}
              style={{alignContent:'center',justifyContent:'center'}}
              disabled = {day === TODAY ? true : false}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 25,
                  color:day === TODAY ? colors.blue: colors.black,
                  opacity: day === TODAY ? 1 : 0.5,
                }}
              >TODAY</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style = {{
                marginLeft: 20,
                salignContent:'center',
                justifyContent:'center'
              }}
              onPress = {()=>{setday(MONTH)}}
              disabled = {day === MONTH ? true : false}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 25,
                  color:day === MONTH ? colors.blue: colors.black,
                  opacity: day === MONTH ? 1 : 0.5,
                }}
              >MONTH</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems:'center',justifyContent:'center'}}>
          <Text 
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              color:"red",
              paddingRight:15,
            }}
            >-1111</Text>
          </View>
          
        </View>
        <View style={styles.list}>
          <FlatList
            data={salon}
            keyExtractor = {item => item.key}
            contentContainerStyle={{padding:5,paddingBottom:20,}}
            renderItem={({item})=>{
              return <TouchableOpacity onPress={()=>{navigation.navigate('SalonList',{item});}} style={{flex:1,marginBottom:5}}>
                  <View style={{padding:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <View style={[StyleSheet.absoluteFillObject,{backgroundColor:item.color,
                                  borderRadius:10,}]}/>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Image source={item.image} style={styles.image}/>
                    </View>
                    <Text style={styles.text}>-{item.total}</Text>
                  </View>
              </TouchableOpacity>
            }}
            />
        </View>
      </View>
    </View>
    );
     {/* <SelectDropdown
            data={countriesWithFlags}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonStyle={styles.dropdown3BtnStyle}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <View style={styles.dropdown3BtnChildStyle}>
                  {selectedItem ? (
                    <Image source={selectedItem.image} style={styles.dropdown3BtnImage} />
                  ) : (
                    <Ionicons name="cart-outline" color={colors.brown4} size={32} />
                  )}
                  <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.title : 'Select'}</Text>
                  <FontAwesome name="chevron-down" color={colors.brown4} size={18} />
                </View>
              );
            }}
            dropdownStyle={styles.dropdown3DropdownStyle}
            rowStyle={styles.dropdown3RowStyle}
            renderCustomizedRowChild={(item, index) => {
              return (
                <View style={styles.dropdown3RowChildStyle}>
                  <Image source={item.image} style={styles.dropdownRowImage} />
                  <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                </View>
              );
            }}
          /> */}

}
const styles = StyleSheet.create({
  container : {
    flex:1 ,
    backgroundColor: colors.brown3,
  },
  text_1 :{
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
  text_2 :{
    color: colors.white,
    fontSize: 45,
    fontWeight: '700'
  },
  body : {
    // height: '100%',
    // width : '100%',
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
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









  dropdown3BtnStyle: {
    width: '50%',
    height: 50,
    backgroundColor: colors.white,
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.darkBlue,
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: {width: 45, height: 45, resizeMode: 'cover'},
  dropdown3BtnTxt: {
    color: colors.brown4,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: {backgroundColor: 'slategray'},
  dropdown3RowStyle: {
    backgroundColor:colors.white,
    borderBottomColor: colors.darkBlue,
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdownRowImage: {width: 45, height: 45, resizeMode: 'cover'},
  dropdown3RowTxt: {
    color: colors.brown4,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },
});
