import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppState";
import { View, FlatList, Text, StyleSheet, Button } from "react-native";
import Transaction from "./Transaction";

export const TransactionList = () => {
  const { transactions, getTransaction } = useContext(AppContext);

  useEffect(() => {
    // Get transaction
    getTransaction();
    //eslint-disable-next-line
  }, []);

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.history}>Transaction </Text>
      </View>
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <Transaction key={item._id} transaction={item} />
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  history: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 22,
    color: 'white'
  },
  header: {
    height: 60,
    backgroundColor: "#007de3",
    marginTop: 12,
    borderRadius: 20,
  },
});
