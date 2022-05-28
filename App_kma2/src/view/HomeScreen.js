import React, {Component,useRef,useEffect,useState} from 'react';
import {
  RefreshControl,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  state,
  FlatList,
} from 'react-native';
import COLORS from '../components/colors'
import {useSelector} from 'react-redux';
import {byCategory} from '../api/api_expense'
import {colors,images2,countriesWithFlags} from '../components/salon2';
const TODAY = 'TODAY';
const MONTH = 'MONTH';
export default HomeScreen =( {navigation,route} )=>{
  const[lists,setLists] = useState([]);
  const [day, setday] = useState(TODAY);
  const [money,setMoney] = useState();
  const [refreshControl,setRefreshControl] = useState(false)
  const info = useSelector((state)=>state.personalInfo)
  useEffect(() => {
    console.log(info.token);
    let a=0;
    byCategory(info.token).then((data)=>{
      setLists(data.exp.map((item,index)=>({
        ...item,
        color: colors[index%colors.length],
        image: images2[item._id],
        key:index,
      })))
      for (var key2 in lists){
        //console.log(lists[key2].total);
        a+=lists[key2].total
      }
      setMoney(a)
    })
  },[])

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
                  color:day === TODAY ? COLORS.blue: COLORS.black,
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
                  color:day === MONTH ? COLORS.blue: COLORS.black,
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
            >{money}</Text>
          </View>
          
        </View>
        <View style={styles.list}>
          <FlatList
            data={lists}
            keyExtractor = {item => item.key}
            contentContainerStyle={{padding:5,paddingBottom:20,}}
            renderItem={({item})=>{
              return <TouchableOpacity onPress={()=>{navigation.navigate('SalonList',{item});}} style={{flex:1,marginBottom:5}}>
                  <View style={{padding:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <View style={[StyleSheet.absoluteFillObject,{backgroundColor:item.color,
                                  borderRadius:10,}]}/>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                      <Text style={styles.name}>{item._id}</Text>
                      <Image source={item.image} style={styles.image}/>
                    </View>
                    <Text style={styles.text}>-{item.total}</Text>
                  </View>
              </TouchableOpacity>
            }}
            refreshControl = {
              <RefreshControl refreshing = {refreshControl} onRefresh={()=>{
                setRefreshControl(true)
                let a=0;
                byCategory(info.token).then((data)=>{
                  setLists(data.exp.map((item,index)=>({
                    ...item,
                    color: colors[index%colors.length],
                    image: images2[item._id],
                    key:index,
                  })))
                  for (var key2 in lists){
                   //console.log(lists[key2].total);
                   a+=lists[key2].total
                  }
                   setMoney(a)
                  })
                setRefreshControl(false)
              }} colors={['red']}
              />
            }
            />
        </View>
      </View>
    </View>
    );
    
}
const styles = StyleSheet.create({
  container : {
    flex:1 ,
    backgroundColor: COLORS.brown3,
  },
  text_1 :{
    color: COLORS.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
  text_2 :{
    color: COLORS.white,
    fontSize: 45,
    fontWeight: '700'
  },
  body : {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  body_title : {
    height:45,
    flexDirection: 'row',
    paddingLeft:20,
    paddingBottom:5,
    justifyContent:'space-between',
  },
  name:{
    fontWeight:'700',
    fontSize:18,
    color:COLORS.black,
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
});
