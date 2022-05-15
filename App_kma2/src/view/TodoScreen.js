import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import COLORS from '../components/colors';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableHighlight,

} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import {VictoryPie} from 'victory-native';



const TodoScreen= () => {
  const [viewMode, setViewMode] = React.useState("chart");
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
    return(
      <View>
        <Text>
          Lai Van Hieu List
        </Text>
      </View>
    )
  }

  function processCategoryDataToDisplay(){

  }
  function renderChart(){
    let chartData = processCategoryDataToDisplay();
    return (
      <View>
        <VictoryPie
          //data={chartData}
        />
      </View>
    )
  }
  return (
    <View style={{flex:1}}>
       {renderCategoryHeaderSection()}
    <View>
      <ScrollView contentContainerStyle={{paddingBottom:60}}>
        {
          viewMode == "list" &&
          <View>
           {renderCategoryList()}
          </View>
        }
        {
          viewMode == "chart" &&
          <View>
            {renderChart()}
          </View>
        }  
      </ScrollView>
    </View>
  </View>
  );
};


export default  TodoScreen;
