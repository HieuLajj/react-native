
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
import LoginScreen from './src/view/LoginScreen';
import HomeScreen from './src/view/HomeScreen';

const Stack = createNativeStackNavigator();

const App= () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
  // <View style={_styles.container} > 
  //   <Wave
  //    //
  //    //   ref={ref=>this._waveRect = ref}
  //     style={_styles.wave}
  //     H={130}
  //     waveParams={[
  //       {A: 30, T: 540, fill: '#424874'},
  //       {A: 45, T: 420, fill: '#DCD6F7'},
  //       {A: 90, T: 450, fill: '#A6B1E1'},
  //     ]}
  //     animated={true}
  //      speed={20}
  //   />   
  // </View>
  <NavigationContainer>
     <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}
      >

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>

  </NavigationContainer>
  );
};


export default App;
