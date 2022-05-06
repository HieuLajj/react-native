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
  Dimensions,
  Keyboard, 
  Animated,
  Button,
  Image,
  state,
} from 'react-native';
const {width} = Dimensions.get('window');
import colors from '../components/colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import SelectDropdown from 'react-native-select-dropdown'
import SelectDropdown from 'react-native-select-dropdown'
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
  return (
    <View style={styles.container}>
      <View style={{padding: 30}}>
        <Text style={styles.text_1}>My Budget</Text>

        <Text style={styles.text_2}>$537.432</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.body_title}>
          <TouchableOpacity
            style={{
              paddingVertical:6,
              borderBottomWidth: 4,
              borderBottomColor:  day === TODAY ? colors.blue: colors.black,
              color:'red',
            }}
            onPress = {()=>{setday(TODAY)}}
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
              paddingVertical:6,
              borderBottomWidth: 4,
              borderBottomColor:  day === MONTH ? colors.blue: colors.black,
              color:'red',
              marginLeft: 30,
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
    fontSize: 30,
    fontWeight: '700',
  },
  text_2 :{
    color: colors.white,
    fontSize: 50,
    fontWeight: '700'
  },
  body : {
    height: '100%',
    width : '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  body_title : {
    flexDirection: 'row',
    paddingTop: 20,
    padding: 50,
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
