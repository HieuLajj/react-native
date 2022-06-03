import React, {useState,useEffect,useRef} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import COLORS from '../components/colors';
import {Calendar} from 'react-native-calendars'
import ItemBox from '../components/ItemBox';
import {useDispatch,useSelector} from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import {byCategory} from '../api/api_expense'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  RefreshControl,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {listbyuser,deleteExpense,updateExpense,DayMonth} from '../api/api_expense'
import {VictoryPie, VictoryTheme} from 'victory-native';
import styless from '../components/styless';
import {colors,images2,countriesWithFlags} from '../components/salon2';
import Animated from 'react-native-reanimated';
import SelectDropdown from 'react-native-select-dropdown';



const TodoScreen= () => {
const [reset,setReset] = useState(false)
const [viewMode, setViewMode] = useState("chart")
const [lists,setLists] = useState([]);
const [lists2,setLists2] = useState([]);
const [listDayMonth, setListDayMonth] = useState([]);
const [selectedCategory, setSelectedCategory] = useState(null)
const info = useSelector((state)=>state.personalInfo)
const [refreshControl,setRefreshControl] = useState(false)
const sheetRef = React.useRef(null);
const dropdownRef = useRef({});
const fall = new Animated.Value(1);

useEffect(() => {
  listbyuser(info.token).then((data)=>{
  setLists(data.exp.map((item,index)=>({
    ...item,
    color: colors[index%colors.length],
    image: images2[item.title],
  })))
  })

 
    byCategory(info.token).then((data)=>{
    setLists2(data.exp.month.map((item,index)=>({
        ...item,
        color: colors[index%colors.length],
        image: images2[item._id],
        key:index,
    })))})

}, [reset])

const [inputs, setInputs] = useState({
  title: 'Other',
  description: '',
  amount:''
});
const [id_update, setid] = useState()
const handleOnChange = (text,input) => {
  setInputs(prevState=>({...prevState,[input]:text}));
};

  function renderCategoryHeaderSection(){
    return(
      <View style={{flexDirection:'row', padding: 10,
                    justifyContent:'space-between',alignItems:'center'
      }}>
        <View>
          <Text style={{color:COLORS.darkBlue,fontSize:18,fontWeight:'bold'}}>CATEGORIES</Text>
          <Text style={{color:'gray',fontSize:13}}>3 Total</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              alignItems:'center',
              justifyContent: 'center',
              height:50,
              width: 50,
              backgroundColor: viewMode== "chart" ? COLORS.blue : null,
              borderRadius:25,
            }}
            onPress={()=>setViewMode("chart")}
          >
            <FontAwesome name="pie-chart" color={COLORS.black} size={30}/>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems:'center',
              justifyContent: 'center',
              height:50,
              width: 50,
              backgroundColor:viewMode== "list" ? COLORS.blue : null,
              borderRadius:25,
            }}
            onPress={()=>setViewMode("list")}
          >
            <FontAwesome name="list-ul" color={COLORS.black} size={30}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems:'center',
              justifyContent: 'center',
              height:50,
              width: 50,
              backgroundColor:viewMode== "calendar" ? COLORS.blue : null,
              borderRadius:25,
            }}
            onPress={()=>{
            setViewMode("calendar")
            DayMonth(info.token).then((data)=>{
              var data4 = {}
              data.exp.forEach(
                function(v){
                  data4[v._id] = v.total<info.avg? {selected: true, marked: true, selectedColor: 'blue'}:{selected: true, marked: true, selectedColor: 'red'}
                }
              );
              console.log(data4)
              setListDayMonth(data4);
              // setLists(data.exp.map((item,index)=>({
              //   ...item,
              //   color: colors[index%colors.length],
              //   image: images2[item.title],
              // })))
            })
          }}
          >
            <FontAwesome name="calendar" color={COLORS.black} size={30}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  function renderCategoryList(){
    const deleteItem= (id,index)=>{
      const arr=[...lists];
      arr.splice(index,1);
      setLists(arr);
      deleteExpense(info.token,id);
      console.log(id)
      console.log(index)
    }
    const updateItem = (id)=>{
      //console.log('hello')
      setid(id)
      sheetRef.current.snapTo(0)
    }
    const renderInner = () =>(
      <View style={styles2.panel}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TextInput 
              keyboardType='numeric'
              placeholder='amount'
              style={{
                fontSize:20,
                marginLeft: 10,
                height:45,
                paddingHorizontal: 10,
                width: '40%',
                borderBottomWidth:2,
                borderBottomColor:COLORS.blue,
              }}
              value = {inputs.amount}
              multiline={true}
              numberOfLines={1}
              onChangeText = {(text) => handleOnChange(text,'amount')}
            ></TextInput>
            <Text>       
              <SelectDropdown         
                data={countriesWithFlags}
                ref={dropdownRef} 
                onSelect={(selectedItem, index) => {
                  //console.log(selectedItem, index);
                  console.log(selectedItem.title);
                  handleOnChange(selectedItem.title,'title')
              }}
                buttonStyle={styles2.dropdown3BtnStyle}
                renderCustomizedButtonChild={(selectedItem, index) => {
                  return (
                    <View style={styles2.dropdown3BtnChildStyle}>
                      {selectedItem ? (
                        <Image source={selectedItem.image} style={styles2.dropdown3BtnImage} />
                      ) : (
                        <Ionicons name="cart-outline" color={COLORS.brown4} size={32} />
                      )}
                      <Text style={styles2.dropdown3BtnTxt}>{selectedItem ? selectedItem.title : 'Select'}</Text>
                      <FontAwesome name="chevron-down" color={COLORS.brown4} size={18} />
                    </View>
                  );
                }}
                dropdownStyle={styles2.dropdown3DropdownStyle}
                rowStyle={styles2.dropdown3RowStyle}
                renderCustomizedRowChild={(item, index) => {
                  return (
                    <View style={styles2.dropdown3RowChildStyle}>
                      <Image source={item.image} style={styles2.dropdownRowImage} />
                      <Text style={styles2.dropdown3RowTxt}>{item.title}</Text>
                    </View>
                  );
                }}
              />

            </Text>
            </View>
            <View style={{marginTop:10}}>
              <TextInput 
              placeholder='note'
              style={{
                height:60,  
                width:styless.widowWidth-60,
                padding:10,
                borderColor: COLORS.blue,
                borderWidth:1, 
                marginLeft:10,    
              }}
              multiline= {true}
              borderBottomWidth={3}
              borderLeftWidth={3}
              value = {inputs.description}
              editable={true}
              numberOfLines={2}
              onChangeText = {(text) => handleOnChange(text,'description')}
              ></TextInput>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
              <TouchableOpacity onPress={()=>{
                updateExpense(info.token,id_update,inputs)
                setReset(!reset)
                sheetRef.current.snapTo(1)
                dropdownRef.current.reset() 
                setInputs("")
                }}>
                <Text style={{fontSize:20}}>Ok</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                  sheetRef.current.snapTo(1)
                  setInputs("")
                  dropdownRef.current.reset() 
                  }}>
               <Text style={{fontSize:20}}>Cancel</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
    const renderHeader = ()=>(
      <View style={styles2.header}>
         <View style={styles2.panelHeader}>
            <View style={styles2.panelHandle}>
              
            </View>
         </View>
     </View>
    );
    return(
      <View style={{flex:1}}>
        <BottomSheet
        snapPoints={[195,0]}
        ref={sheetRef}
        renderContent={renderInner}
        renderHeader= {renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
        enabledContentTapInteraction={false} 
        />
        <FlatList
            data={lists}
            keyExtractor = {item => item._id}
            contentContainerStyle={{padding:5,paddingBottom:20,}}
            renderItem={({item,index})=>{
               return <ItemBox data={item} 
               handleDelete={()=>deleteItem(item._id,index)}
               handleUpdate={()=>updateItem(item._id)}
              />
            }}
            refreshControl = {
              <RefreshControl refreshing = {refreshControl} onRefresh={()=>{
                setRefreshControl(true)
                setReset(!reset)
                setRefreshControl(false)
              }} colors={['red']}
              />
            }
            />
      </View>
    )
  }

function setSelectCategoryByName(_id) {
    let category = lists2.filter(a => a._id == _id)
    setSelectedCategory(category[0])
}
  function renderChart(){
   
    return (
      <View style={{alignItems:'center', justifyContent:'center'}}>
        <VictoryPie data={lists2.slice(0,5)} 
                    labelRadius={({ innerRadius }) => (styless.widowWidth * 0.4 + innerRadius) / 2.5}
                    x="_id" 
                    y="total" 
                    radius={({ datum }) => (selectedCategory && selectedCategory._id == datum._id) ? styless.widowWidth * 0.4 : styless.widowWidth * 0.4 - 10}
                    //theme={VictoryTheme.material}
                    colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
                    innerRadius={70}
                    style={{labels:{fontSize:15,fontWeight:'bold',fill: COLORS.black,}}}
                    events={[{
                      target: "data",
                      eventHandlers:{
                        onPress: ()=>{
                          return [{
                            target:'labels',
                            mutation: (props)=>{
                              let categoryName =lists2[props.index]._id;
                              setSelectCategoryByName(categoryName)
                            }
                          }]
                        }
                      }
                    }]}
                    />
        <View style={{position:'absolute',top:'46%',left:'42%'}}>
          <Text style={{fontSize:16, fontWeight:"bold"}}>{lists2.length} Expenses</Text>
        </View>
      </View>
    )
  }
  function renderExpenseSumary(){

    const renderItem=({item})=>{
      return(
        <TouchableOpacity
          style={{
            flex:1,
            //marginHorizontal:20,
            marginLeft:20,
            marginTop:10,
            flexDirection: 'row',
            height:40,
            width:styless.widowWidth-40,
            paddingHorizontal: 10,
            borderRadius:10,
            backgroundColor:(selectedCategory && selectedCategory._id==item._id)?item.color: COLORS.white,
          }}

          onPress={()=>{
            let catagoryName = item._id
            setSelectCategoryByName(catagoryName)
          }}
        >
          <View style={{flex:1, flexDirection:'row',alignItems:'center'}}>
            <View style={{
              width:20,
              height:20,
              backgroundColor:(selectedCategory && selectedCategory.name==item.name)?COLORS.white: item.color,
              borderRadius:5
            }}>

            </View>
            <Text style={{
              marginLeft:10,
              fontWeight:'bold',
            }}>{item._id}</Text>
          </View>
          <View style={{justifyContent:'center'}}>
             <Text style={{fontWeight:'bold'}}>{item.total}</Text>
          </View>
        </TouchableOpacity>
      )
    }
    return(
      <View>
        <FlatList
          data={lists2}
          renderItem={renderItem}
          keyExtractor = {item => item.key}
          // ListHeaderComponent={ContentThatGoesAboveTheFlatList}
          // ListFooterComponent={ContentThatGoesBelowTheFlatList}
        />
      </View>
    )
  }

  function renderCalendar(){
    
    return(
      <View>
         <Calendar
             markedDates={
            //    {
            //   '2022-05-16': {selected: true, marked: true, selectedColor: 'blue'},
            //   '2022-05-17': {selected: true, marked: true, selectedColor: 'red'},
            //   '2022-05-18': {selected: true, marked: true, selectedColor: 'red'},
            //   '2022-05-19': {selected: true, marked: true, selectedColor: 'red'},
            //   '2022-05-20': {selected: true, marked: true, selectedColor: 'blue'},
            //   '2022-05-21': {selected: true, marked: true, selectedColor: 'blue'},
            //   '2022-05-22': {selected: true, marked: true, selectedColor: 'blue'},
            // }
            listDayMonth
          }
            onDayPress={(e)=>{
             console.log(`e`,e);
           }}
         />
      </View>
     
    )
  }
  return (
    <View style={{flex:1,backgroundColor:COLORS.brown1}}>
       {renderCategoryHeaderSection()}
    <View style={{flex:1}}>
        {
          viewMode == "list" &&
          <View  style={{flex:1}}>
           {renderCategoryList()}
          </View>
        }           
        {
          viewMode == "chart" &&
          <ScrollView nestedScrollEnabled={true} style={{ flex:1}} >
            <View style={{flex:1}}>
              {renderChart()}
            </View> 
            <ScrollView horizontal={true} style={{flex:1}}>
              {renderExpenseSumary()}
            </ScrollView>   
           </ScrollView> 
        } 
       
        {
          viewMode =="calendar" &&
          <View  style={{flex:1}}>
            {renderCalendar()}
          </View>
        }
    </View>
  </View>
  );
};

const styles2 = StyleSheet.create({
  panel: {
    backgroundColor: COLORS.white,
    paddingHorizontal:20,
  },
  header: {
    backgroundColor: COLORS.blue,
    shadowColor: COLORS.black,
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.black,
    marginBottom: 10,
  },
  panelTitle: {
    backgroundColor:'blue',
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    backgroundColor:'red',
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: COLORS.brown3,
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  dropdown3BtnStyle: {
    width: '40%',
    height: 50,
    backgroundColor: COLORS.white,
    paddingHorizontal: 0,
   // borderWidth: 1,
    borderRadius: 5,
    //borderColor: 'gray',
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: {width: 40, height: 40, resizeMode: 'cover'},
  dropdown3BtnTxt: {
    color: COLORS.brown4,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: {backgroundColor: 'slategray'},
  dropdown3RowStyle: {
    backgroundColor:COLORS.white,
    borderBottomColor: COLORS.brown2,
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
export default  TodoScreen;
