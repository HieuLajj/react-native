import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TransactionList } from '../Components/TransactionList';
import AddTransaction from '../Components/AddTransaction';
import Balance from '../Components/Balance';
import IncomeExpense from '../Components/IncomeExpense';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
      <Drawer.Navigator>
      <Drawer.Screen name="Transaction" component={TransactionList} />
      <Drawer.Screen name="Add transaction" component={AddTransaction} />
      <Drawer.Screen name="Balance" component={Balance} />
      <Drawer.Screen name="Budget" component={IncomeExpense} />
    </Drawer.Navigator>
  )
}

export default DrawerScreen;