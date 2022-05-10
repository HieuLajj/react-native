
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native'

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
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
      backBehavior="history"
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Add" component={AddScreen}   options={{
       // tabBarIcon: ()=><Image source={require('./src/images/image_select/ic_Clothes.png')} style={{width:30,height:30}}  resizeMode="stretch"/>
       tabBarIcon: ()=> <AddButton/>,  
       tabBarLabel: "",
       
      }}/>
      <Tab.Screen name="Todo" component={TodoScreen}/>

    </Tab.Navigator>
  );
}

const App= () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
  <NavigationContainer>
     <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}
      >

        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="SalonList" component={SalonListDentails}/>
        <Stack.Screen name="HomeTab" component={MyTabs}/>
      </Stack.Navigator>

  </NavigationContainer>
  );
};


export default App;
