import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AppContext } from "../context/AppState";
import { numberWithCommas } from "../Components/Test";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(AppContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  const onDelete = (id) => {
    deleteTransaction(id);
  };
  return (
    <View styles={transaction.amount < 0 ? "minus" : "plus"}>
      <View style={styles.transaction}>
        <Text style={styles.text}>{transaction.text}</Text>
        <Text style={styles.text}>
          {sign}
          {numberWithCommas(Math.abs(transaction.amount))}
        </Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete(transaction._id)}
        >
          <Text style={styles.deleteText}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(Transaction);

const styles = StyleSheet.create({
  transaction: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    padding: 10,
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    padding: 4,
    borderBottomColor: "blue",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  deleteButton: {
    color: "red",
    backgroundColor: "red",
    padding: 5,
  },
  deleteText: {
    color: "white",
  },
});
