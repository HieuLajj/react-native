import React, {useState,useEffect} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import COLORS from '../components/colors';
import {Calendar} from 'react-native-calendars'
import salon from '../components/salon'
import ItemBox from '../components/ItemBox';
import {useDispatch,useSelector} from 'react-redux';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  RefreshControl,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {listbyuser} from '../api/api_expense'
import {VictoryPie, VictoryTheme} from 'victory-native';
import styless from '../components/styless';
import {colors,images2} from '../components/salon2';



const TodoScreen= () => {

//const categoryListHeightAnimationValue = useRef(new Animated.Value(115)).current;

//const [categories, setCategories] = React.useState(categoriesData)
const [viewMode, setViewMode] = React.useState("chart")
const[lists,setLists] = useState([]);
const [selectedCategory, setSelectedCategory] = React.useState(null)
const info = useSelector((state)=>state.personalInfo)
const [refreshControl,setRefreshControl] = useState(false)
const [expenses, setExpenses] = useState([])

useEffect(() => {
  // LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  listbyuser(info.token).then((data)=>{
  setLists(data.exp.map((item,index)=>({
    ...item,
    color: colors[index%colors.length],
    image: images2[item.title],
  })))
  })
}, [])

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
            onPress={()=>setViewMode("calendar")}
          >
            <FontAwesome name="calendar" color={COLORS.black} size={30}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  function renderCategoryList(){
    const deleteItem= (index)=>{
    const arr=[...lists];
    arr.splice(index,1);
    setLists(arr);
    }
    return(
      <View>
        <FlatList
            data={lists}
            keyExtractor = {item => item._id}
            contentContainerStyle={{padding:5,paddingBottom:20,}}
            renderItem={({item,index})=>{
               return <ItemBox data={item} 
               handleDelete={()=>deleteItem(index)}
              />
            }}
            refreshControl = {
              <RefreshControl refreshing = {refreshControl} onRefresh={()=>{
                setRefreshControl(true)
                listbyuser(info.token).then((data)=>{
                  setLists(data.exp.map((item,index)=>({
                    ...item,
                    color: colors[index%colors.length],
                    image: images2[item.title],
                  })))
                  })
                setRefreshControl(false)
              }} colors={['red']}
              />
            }
            />
      </View>
    )
  }

function setSelectCategoryByName(name) {
    let category = salon.filter(a => a.name == name)
    setSelectedCategory(category[0])
}
  function renderChart(){
   
    return (
      <View style={{alignItems:'center', justifyContent:'center'}}>
        <VictoryPie data={salon.slice(0,5)} 
                    labelRadius={({ innerRadius }) => (styless.widowWidth * 0.4 + innerRadius) / 2.5}
                    x="name" 
                    y="total" 
                    radius={({ datum }) => (selectedCategory && selectedCategory.name == datum.name) ? styless.widowWidth * 0.4 : styless.widowWidth * 0.4 - 10}
                    theme={VictoryTheme.material}
                    innerRadius={70}
                    style={{labels:{fontSize:15,fontWeight:'bold',fill: COLORS.white,}}}
                    events={[{
                      target: "data",
                      eventHandlers:{
                        onPress: ()=>{
                          return [{
                            target:'labels',
                            mutation: (props)=>{
                              let categoryName =salon[props.index].name;
                              setSelectCategoryByName(categoryName)
                            }
                          }]
                        }
                      }
                    }]}
                    />
        <View style={{position:'absolute',top:'46%',left:'42%'}}>
          <Text style={{fontSize:16, fontWeight:"bold"}}>5 Expenses</Text>
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
            marginHorizontal:20,
            flexDirection: 'row',
            height:40,
            paddingHorizontal: 10,
            borderRadius:10,
            backgroundColor:(selectedCategory && selectedCategory.name==item.name)?item.color: COLORS.brown1,
          }}

          onPress={()=>{
            let catagoryName = item.name
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
            }}>{item.name}</Text>
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
          data={salon}
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
             markedDates={{
              '2022-05-16': {selected: true, marked: true, selectedColor: 'blue'},
              '2022-05-17': {selected: true, marked: true, selectedColor: 'red'},
              '2022-05-18':  {selected: true, marked: true, selectedColor: 'red'},
              '2022-05-19': {selected: true, marked: true, selectedColor: 'red'},
              '2022-05-20': {selected: true, marked: true, selectedColor: 'blue'},
              '2022-05-21': {selected: true, marked: true, selectedColor: 'blue'},
              '2022-05-22': {selected: true, marked: true, selectedColor: 'blue'},
            }}
            onDayPress={(e)=>{
             console.log(`e`,e);
           }}
         />
         <Text>faeeeffèw</Text>
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
          <ScrollView>
          <View  style={{flex:1}}>
            {renderChart()}    
            {renderExpenseSumary()}
          
          </View>
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


export default  TodoScreen;
