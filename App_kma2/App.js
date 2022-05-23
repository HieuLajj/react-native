
import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native'
import 'react-native-gesture-handler'
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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Svg, {
  G,
  Path,
} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import LoginScreen from './src/view/LoginScreen';
import HomeScreen from './src/view/HomeScreen';
import RegisterScreen from './src/view/RegisterScreen';
import SalonListDentails from './src/view/SalonListDetails';
import AddScreen from './src/view/AddScreen';
import TodoScreen from './src/view/TodoScreen';
import AddButton from './src/components/AddButton';
import HomeButton from './src/components/HomeButton';
import TodoButton from './src/components/TodoButton';
import SettingScreen from './src/view/SettingScreen';
import { DrawerContent } from './src/components/DrawerContent';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
import {Provider} from 'react-redux';
import { store } from './src/redux/store';
import axios from 'axios'
import SettingScreen_Account from './src/view/SettingScreen_Account';


function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
      backBehavior="history"
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon:({focused}) => <HomeButton focused={focused}/>,
      }}/>
      <Tab.Screen name="Add" component={AddScreen}   options={{
       tabBarIcon: ({focused})=><AddButton  focused={focused}/>,  
       tabBarLabel: "",
       //tabBarButton:()=> <AddButton/>,
       
      }}/>
      <Tab.Screen name="Todo" component={TodoScreen} options={{
         tabBarIcon:({focused}) => <TodoButton focused={focused}/>,
      }}/>

    </Tab.Navigator>
  );
}

function MyDraws(props){
  // const {token} = props.route.params;
  // console.log("yone")
  // console.log(token)
  return(
    <Provider store={store}>
    <Drawer.Navigator  
        initialRouteName="Home"
        screenOptions={{
         headerShown: false
       }}
       drawerContent={ props => <DrawerContent {...props}/>}
       > 
      <Drawer.Screen name="MyTab" component={MyTabs}/>
      <Drawer.Screen name="Setting" component={SettingScreen}/>
      <Drawer.Screen name="SettingAccount" component={SettingScreen_Account}/>
    </Drawer.Navigator>
    </Provider>
  )
}

const App= () => {
  const fetchApi = async ()=>{
    try {
      const res = await axios.get('http://192.168.1.235:8000/')
      console.log(res.data)
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(()=>{
     fetchApi()
  },[])

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
  <Provider store={store}>
    <NavigationContainer>
     <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="SalonList" component={SalonListDentails}/>
        {/* <Stack.Screen name="HomeTab" component={MyTabs}/> */}
        <Stack.Screen name="MyDraw" component={MyDraws}/>
      </Stack.Navigator>

    </NavigationContainer>
  </Provider>
  );
};


export default App;
