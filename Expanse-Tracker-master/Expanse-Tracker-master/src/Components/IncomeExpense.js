import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppContext } from "../context/AppState";
import { numberWithCommas } from "../Components/Test";

const IncomeExpense = () => {
  const { transactions } = useContext(AppContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  // Income
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  // Expense
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.budget}>Budget</Text>
      </View>
      <View style={styles.incomeBox}>
        <Text style={styles.text}>Income</Text>
        <Text style={styles.income}>Rs.{numberWithCommas(income)}</Text>
      </View>
      <View style={styles.expenseBox}>
        <Text style={styles.text}>Expense</Text>
        <Text style={styles.expense}> Rs.{numberWithCommas(expense)}</Text>
      </View>
    </View>
  );
};

export default React.memo(IncomeExpense);

const styles = StyleSheet.create({
  amount: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 0.5,
    marginBottom: 10,
  },
  income: {
    color: "green",
    fontSize: 19,
  },
  expense: {
    color: "red",
    fontSize: 19,
  },
  text: {
    fontSize: 20,
  },
  header: {
    height: 60,
    backgroundColor: "#007de3",
    marginTop: 12,
    borderRadius: 20,
  },
  budget: {
    textAlign: "center",
    fontSize: 22,
    color: "white",
    marginTop: 10,
  },
  incomeBox: {
    backgroundColor: "#9cffd4",
    borderRadius: 10,
    padding: 10,
    marginTop: 50,
    alignItems: "center",
  },
  expenseBox: {
    backgroundColor: "#ff9991",
    borderRadius: 10,
    padding: 10,
    marginTop: 50,
    alignItems: "center",
  }
});
