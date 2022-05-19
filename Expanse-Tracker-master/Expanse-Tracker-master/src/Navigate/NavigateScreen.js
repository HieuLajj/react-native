import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import AddTransaction from '../Components/AddTransaction'
// import { TransactionList } from "../Components/TransactionList";
import DrawerScreen from "./DrawerScreen";

const Stack = createStackNavigator();

const NavigateScreen = () => {
  return (
   <NavigationContainer>
     {/* <Stack.Navigator initialRouteName='TransactionList'>
       <Stack.Screen name="Home" component={AddTransaction} options={{ title: 'Expense Tracker' }}/>
       <Stack.Screen name="TransactionList" component={TransactionList} options={{ title: 'Transaction' }}/>
     </Stack.Navigator> */}
     <DrawerScreen/>
   </NavigationContainer>
  );
};

export default NavigateScreen;
