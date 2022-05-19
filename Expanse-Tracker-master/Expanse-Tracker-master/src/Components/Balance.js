import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppContext } from "../context/AppState";
import { numberWithCommas } from "..//Components/Test";

const Balance = () => {
  const { transactions } = useContext(AppContext);

  const amounts = transactions.map((transaction) =>
    parseInt(transaction.amount)
  );

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.balanceText}>Balance</Text>
      </View>
      <Text style={styles.balance}>
        Your Balance is Rs.{numberWithCommas(total)}
      </Text>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  balance: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 50,
    marginBottom: 10,
  },
  container: {
    backgroundColor: "white",
  },
   header: {
    height: 60,
    backgroundColor: "#007de3",
    marginTop: 12,
    borderRadius: 20,
  },
  balanceText: {
    textAlign: "center",
    color: "white",
    fontSize: 22,
    marginTop: 10
  }
});
