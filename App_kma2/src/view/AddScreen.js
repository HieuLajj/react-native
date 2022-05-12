
import React from 'react';
import COLORS from '../components/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
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
  Image,
} from 'react-native';



const AddScreen= ({navigation}) => {
  const countriesWithFlags = [
    {title: 'Clothes', image: require('../images/image_select/ic_Clothes.png')},
    {title: 'Food', image: require('../images/image_select/ic_Food.png')},
    {title: 'Medical', image: require('../images/image_select/ic_medical.png')},
    {title: 'Taxi', image: require('../images/image_select/ic_taxi.png')},
    {title: 'Other', image: require('../images/image_select/ic_working.png')},
    
  ];
  return (
      <View style={styles.container}>
        <View style={{height:'10%',}}>

        </View>
        <View style={{
          flex:1,
          backgroundColor:COLORS.white,
          borderTopLeftRadius:40,
          borderTopRightRadius:40,
        }}>
          <View style={{flexDirection:'row',justifyContent:'space-between',padding:20}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
              <FontAwesome name='times' size={40} color={COLORS.black}></FontAwesome>
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name='thumbs-up' size={40} color={COLORS.black}></FontAwesome>
            </TouchableOpacity>         
          </View>
          <View style={{flexDirection:'row',paddingLeft:20,alignItems:'center'}}>
            <View style={{
              height: 50,
              width:100,
              backgroundColor:COLORS.brown3,
              borderRadius:30,
              alignItems:'center',
              justifyContent:'center',
            }}>
              <Text style={{
                color: COLORS.white,
                fontSize:25,
                fontWeight:'700',
              }}>VND</Text>
            </View>
            <TextInput 
              keyboardType='numeric'
              placeholder='amount spent'
              style={{
                fontSize:30,
                marginLeft: 10,
                padding: 10,
                borderBottomWidth:2,
                borderBottomColor:COLORS.darkBlue,
              }}
            ></TextInput>
          </View>
          
          <View style={{flexDirection:'row',paddingLeft:20, paddingTop:50,alignItems:'center'}}>
            <View style={{
              height: 50,
              width:100,
              backgroundColor:COLORS.brown3,
              borderRadius:30,
              alignItems:'center',
              justifyContent:'center',
              
            }}>
              <Text style={{
                color: COLORS.white,
                fontSize:25,
                fontWeight:'700',
              }}>Type</Text>
            </View>
            <View style={{width:'100%',paddingLeft:10,justifyContent:'center'}}>
              
              <SelectDropdown
              
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
                        <Ionicons name="cart-outline" color={COLORS.brown4} size={32} />
                      )}
                      <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.title : 'Select'}</Text>
                      <FontAwesome name="chevron-down" color={COLORS.brown4} size={18} />
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
              />
              </View>
            
            </View>
            
            <View style={{flexDirection:'row',paddingLeft:20,alignItems:'center',paddingTop:50}}>
            <View style={{
              height: 50,
              width:100,
              alignItems:'center',
              justifyContent:'center',
            }}>
               <FontAwesome name='sticky-note' size={40} color={COLORS.black}></FontAwesome>
            </View>
            <TextInput 
              placeholder='note'
              style={{
                fontSize:30,
                marginLeft: 10,
                padding: 10,
                borderBottomWidth:2,
                borderBottomColor:COLORS.darkBlue,
              }}
            ></TextInput>
          </View>
          


          




        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex:1 ,
    backgroundColor: COLORS.brown2,
  },
  dropdown3BtnStyle: {
    width: '50%',
    height: 50,
    backgroundColor: COLORS.white,
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.darkBlue,
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
    color: COLORS.brown4,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: {backgroundColor: 'slategray'},
  dropdown3RowStyle: {
    backgroundColor:COLORS.white,
    borderBottomColor: COLORS.darkBlue,
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
    color: COLORS.brown4,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },
  
})
export default  AddScreen;
