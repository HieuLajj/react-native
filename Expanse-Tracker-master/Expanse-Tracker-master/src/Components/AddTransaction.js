import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AppContext } from "../context/AppState";

const AddTransaction = ({ navigation }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(AppContext);

  const onPress = () => {
    if (!text.trim() || !amount) {
      alert("Add Details");
    } else {
      const newTransaction = {
        // id: Math.floor(Math.random() * 100000000),
        text,
        amount,
      };
      addTransaction(newTransaction);
      setAmount(0);
      setText("");
      navigation.navigate("Transaction");
    }
  };
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.newTransaction}>Add New Transaction</Text>
    </View>
      <Text style={styles.text}>Text :</Text>
      <TextInput
        autoFocus={true}
        defaultValue={text}
        style={styles.textInput}
        placeholderTextColor="grey"
        placeholder="Enter Text"
        onChangeText={(textValue) => setText(textValue)}
      />
      <Text style={styles.text}>Amount :</Text>
      <TextInput
        value={amount}
        style={styles.textInput}
        placeholder="expense(-100) or income(+100)"
        placeholderTextColor="grey"
        keyboardType="number-pad"
        onChangeText={(amountValue) => setAmount(amountValue)}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Add transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(AddTransaction);

const styles = StyleSheet.create({
  newTransaction: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 15,
    color: "white"
  },
  subject: {
    fontSize: 18,
  },
  textInput: {
    padding: 8,
    height: 45,
    borderColor: "#7a42f4",
    borderWidth: 1,
    fontSize: 19,
    borderRadius: 10,
  },
  text: {
    fontSize: 19,
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#007de3",
    padding: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
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
});
